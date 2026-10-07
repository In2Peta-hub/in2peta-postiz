"""AgentMail HTTP client. Same contract as the Fastify growthcrew/agentmail module."""

from __future__ import annotations

import hashlib
import json
import re

import requests

from config import CONFIG

IDEMPOTENCY_RE = re.compile(r"^[A-Za-z0-9_.~-]{1,256}$")


def agentmail_request(path: str, method: str = "GET", body: dict | None = None, headers: dict | None = None) -> dict:
    if not CONFIG.AGENTMAIL_API_KEY:
        raise RuntimeError("AGENTMAIL_API_KEY is not configured")
    request_headers = {
        "Authorization": f"Bearer {CONFIG.AGENTMAIL_API_KEY}",
        "Content-Type": "application/json",
        **(headers or {}),
    }
    key = request_headers.get("Idempotency-Key")
    if key and not IDEMPOTENCY_RE.match(key):
        digest = hashlib.sha256(key.encode()).hexdigest()
        request_headers["Idempotency-Key"] = f"growthcrew-{digest}"
    response = requests.request(
        method,
        f"https://api.agentmail.to/v0{path}",
        headers=request_headers,
        json=body,
        timeout=30,
    )
    try:
        data = response.json()
    except Exception:
        data = {}
    if not response.ok:
        message = data.get("message") if isinstance(data, dict) and isinstance(data.get("message"), str) else json.dumps(data)[:300]
        errors = data.get("errors") if isinstance(data, dict) else None
        details = ""
        if isinstance(errors, list):
            parts = []
            for error in errors:
                if not isinstance(error, dict) or not isinstance(error.get("message"), str):
                    continue
                path_parts = error.get("path") if isinstance(error.get("path"), list) else []
                joined = ".".join(str(part) for part in path_parts if isinstance(part, (str, int))) or "request"
                parts.append(f"{joined}: {error['message']}")
            details = "; ".join(parts)[:500]
        suffix = f" ({details})" if details else ""
        raise RuntimeError(f"AgentMail request failed ({response.status_code}): {message or 'no details'}{suffix}")
    return data if isinstance(data, dict) else {"data": data}
