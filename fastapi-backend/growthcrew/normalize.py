"""Lead normalization ported from the GrowthCrew Fastify service."""

from __future__ import annotations

import re
import unicodedata
from typing import Any
from urllib.parse import urlparse

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")
NO_REPLY_RE = re.compile(r"^(no-?reply|mailer-daemon|postmaster|abuse)@", re.I)
COMPANY_SUFFIX_RE = re.compile(
    r"\b(private limited|pvt\.? ltd\.?|limited|ltd\.?|llp|incorporated|inc\.?|corp\.?|corporation)\b",
    re.I,
)
PLACEHOLDER_RE = re.compile(r"\{\{\s*([a-z_]+)\s*\}\}", re.I)


def is_valid_email(email: Any) -> bool:
    if not isinstance(email, str):
        return False
    trimmed = email.strip()
    return bool(EMAIL_RE.match(trimmed)) and not NO_REPLY_RE.match(trimmed)


def field(record: dict | None, key: str) -> Any:
    if not record:
        return None
    return record.get(key)


def clean_phone(phone: Any) -> str:
    if not phone:
        return ""
    if isinstance(phone, list):
        for item in phone:
            cleaned = clean_phone(item)
            if cleaned:
                return cleaned
        return ""
    if isinstance(phone, dict):
        for key in ("phone", "phone_number", "phoneNumber", "number", "mobile", "mobile_number", "whatsapp"):
            if phone.get(key):
                cleaned = clean_phone(phone[key])
                if cleaned:
                    return cleaned
        return ""
    digits = re.sub(r"[^\d+()\-\s.]", "", str(phone)).strip()
    return digits if len(re.sub(r"\D", "", digits)) >= 7 else ""


def collect_place_phone(place: dict) -> str:
    keys = [
        "mobile", "mobile_number", "whatsapp", "phone", "phones", "phone_number", "phone_numbers",
        "phoneNumber", "phoneNumbers", "contact_phone", "company_phone", "business_phone",
    ]
    for key in keys:
        cleaned = clean_phone(field(place, key))
        if cleaned:
            return cleaned
    for nest_key in ("contact_profiles", "contacts", "contact"):
        nested = field(place, nest_key)
        items = nested if isinstance(nested, list) else ([nested] if nested else [])
        for item in items:
            if isinstance(item, dict):
                cleaned = collect_place_phone(item)
                if cleaned:
                    return cleaned
    return ""


def collect_emails(value: Any) -> list[dict]:
    if not value:
        return []
    if isinstance(value, list):
        found: list[dict] = []
        for item in value:
            found.extend(collect_emails(item))
        return found
    if isinstance(value, dict):
        status = str(value.get("email_status") or value.get("status") or "").lower()
        if status and status not in ("valid", "verified", "deliverable"):
            return []
        email = value.get("email")
        return [{"email": email, "business": bool(value.get("email_is_business"))}] if isinstance(email, str) else []
    return [{"email": value}] if isinstance(value, str) else []


def normalize_company_name(value: str) -> str:
    decomposed = unicodedata.normalize("NFKD", value)
    stripped = "".join(ch for ch in decomposed if not unicodedata.combining(ch)).lower()
    stripped = COMPANY_SUFFIX_RE.sub("", stripped)
    return "".join(ch for ch in stripped if ch.isalnum())


def normalize_website_host(value: str) -> str:
    if not value.strip():
        return ""
    try:
        raw = value if re.match(r"^https?://", value, re.I) else f"https://{value}"
        host = urlparse(raw).hostname or ""
        return host.lower().removeprefix("www.").rstrip(".")
    except Exception:
        return ""


def company_identity_keys(company: str, website: str, fallback: str) -> list[str]:
    keys: set[str] = set()
    normalized_name = normalize_company_name(company)
    website_host = normalize_website_host(website)
    if normalized_name:
        keys.add(f"company:{normalized_name}")
    if website_host:
        keys.add(f"website:{website_host}")
    if not keys and fallback:
        keys.add(f"fallback:{fallback.strip().lower()}")
    return list(keys)


def normalize_coreclaw_places(places: list[dict]) -> list[dict]:
    leads: list[dict] = []
    by_identity: dict[str, dict] = {}
    for place in places:
        company = str(field(place, "company_name") or field(place, "name") or field(place, "title") or "Local Business")
        website = str(field(place, "website") or "")
        candidates = [
            *collect_emails(field(place, "company_email")),
            *collect_emails(field(place, "contact_profiles")),
            *collect_emails(field(place, "email")),
            *collect_emails(field(place, "contacts")),
            *collect_emails(field(place, "emails")),
            *collect_emails(field(place, "verified_emails")),
        ]
        candidate = next((item for item in candidates if is_valid_email(str(item.get("email", "")).strip())), None)
        if not candidate:
            continue
        email = str(candidate["email"]).strip().lower()
        raw_company = str(field(place, "company_name") or field(place, "name") or field(place, "title") or "")
        identity_keys = company_identity_keys(raw_company, website, email)
        existing = next((by_identity.get(key) for key in identity_keys if by_identity.get(key)), None)
        if existing:
            if not existing.get("phone"):
                existing["phone"] = collect_place_phone(place)
            for key in identity_keys:
                by_identity[key] = existing
            continue
        name_value = field(place, "name")
        lead = {
            "id": len(leads),
            "name": f"Team at {name_value}" if name_value else f"{company} Owner",
            "email": email,
            "company": company,
            "title": str(field(place, "owner_title") or field(place, "title") or "Owner / Representative"),
            "phone": collect_place_phone(place),
            "address": str(field(place, "address") or field(place, "company_address") or ""),
            "website": website,
            "city": str(field(place, "city") or ""),
            "category": str(field(place, "primary_category") or field(place, "category") or "AI and technology"),
            "rating": field(place, "review_rating") or field(place, "rating") or None,
            "reviewCount": field(place, "review_count") or field(place, "reviews_count") or 0,
            "isBusinessEmail": bool(candidate.get("business")),
            "raw": place,
        }
        leads.append(lead)
        for key in identity_keys:
            by_identity[key] = lead
    return leads


def parse_csv_rows(input_text: str) -> list[list[str]]:
    rows: list[list[str]] = []
    row: list[str] = []
    cell = ""
    quoted = False
    index = 0
    while index < len(input_text):
        character = input_text[index]
        nxt = input_text[index + 1] if index + 1 < len(input_text) else ""
        if character == '"' and quoted and nxt == '"':
            cell += '"'
            index += 2
            continue
        if character == '"':
            quoted = not quoted
            index += 1
            continue
        if character == "," and not quoted:
            row.append(cell.strip())
            cell = ""
            index += 1
            continue
        if character in ("\n", "\r") and not quoted:
            if character == "\r" and nxt == "\n":
                index += 1
            row.append(cell.strip())
            cell = ""
            if any(row):
                rows.append(row)
            row = []
            index += 1
            continue
        cell += character
        index += 1
    row.append(cell.strip())
    if any(row):
        rows.append(row)
    return rows


def normalize_csv_leads(csv: str) -> list[dict]:
    rows = parse_csv_rows(csv.lstrip("\ufeff"))
    headers = [header.lower() for header in (rows.pop(0) if rows else [])]

    def find(patterns: list[re.Pattern]) -> int:
        for index, header in enumerate(headers):
            if any(pattern.search(header) for pattern in patterns):
                return index
        return -1

    email_index = find([re.compile(r"^email$"), re.compile(r"email")])
    name_index = find([re.compile(r"^name$"), re.compile(r"full.?name"), re.compile(r"first.?name")])
    company_index = find([re.compile(r"company"), re.compile(r"organization"), re.compile(r"org$")])
    title_index = find([re.compile(r"title"), re.compile(r"role"), re.compile(r"position")])
    phone_index = find([re.compile(r"whatsapp"), re.compile(r"phone"), re.compile(r"mobile"), re.compile(r"telephone"), re.compile(r"^tel$")])
    leads = []
    for index, values in enumerate(rows):
        lead = {
            "id": index,
            "email": values[email_index] if email_index >= 0 and email_index < len(values) else "",
            "name": values[name_index] if name_index >= 0 and name_index < len(values) else "",
            "company": values[company_index] if company_index >= 0 and company_index < len(values) else "",
            "title": values[title_index] if title_index >= 0 and title_index < len(values) else "",
            "phone": clean_phone(values[phone_index]) if phone_index >= 0 and phone_index < len(values) else "",
            "raw": {header: (values[header_index] if header_index < len(values) else "") for header_index, header in enumerate(headers)},
        }
        if is_valid_email(lead["email"]):
            leads.append(lead)
    return leads


def first_name(name: str = "there") -> str:
    parts = str(name).strip().split()
    return parts[0] if parts else "there"


def city_from_lead(lead: dict) -> str:
    if lead.get("city"):
        return str(lead["city"])
    parts = [part.strip() for part in str(lead.get("address") or "").split(",") if part.strip()]
    return parts[-2] if len(parts) > 1 else "your area"


def render_template(template: str, lead: dict, settings: dict, sender_name: str | None = None) -> str:
    raw = lead.get("raw") if isinstance(lead.get("raw"), dict) else {}
    email = settings.get("email") or {}
    brand = settings.get("brand") or {}
    values = {
        "first_name": first_name(lead.get("name") or "there"),
        "name": lead.get("name") or "there",
        "company": lead.get("company") or "your company",
        "title": lead.get("title") or "",
        "city": city_from_lead(lead),
        "state": str(field(raw, "state") or ""),
        "category": lead.get("category") or str(field(raw, "primary_category") or "AI and technology"),
        "website": lead.get("website") or "",
        "rating": "" if lead.get("rating") is None else lead.get("rating"),
        "review_count": "" if lead.get("reviewCount") is None else lead.get("reviewCount"),
        "service_focus": brand.get("serviceFocus") or "",
        "offer": brand.get("offer") or "",
        "cta": brand.get("cta") or "",
        "sender_name": sender_name or email.get("senderName") or "The In2Peta team",
        "brand_name": brand.get("name") or "",
        "brand_website": brand.get("website") or "",
    }

    def replace(match: re.Match) -> str:
        key = match.group(1).lower()
        if key not in values or values[key] is None:
            return match.group(0)
        return str(values[key])

    return PLACEHOLDER_RE.sub(replace, template)


def normalize_openai_base(endpoint: str) -> str:
    trimmed = endpoint.strip().rstrip("/")
    without_suffix = trimmed[: -len("/chat/completions")].rstrip("/") if trimmed.endswith("/chat/completions") else trimmed
    try:
        parsed = urlparse(without_suffix)
        if parsed.scheme and parsed.netloc and parsed.path in ("", "/"):
            return f"{parsed.scheme}://{parsed.netloc}/v1"
        return without_suffix
    except Exception:
        return without_suffix
