import os
import tempfile
import unittest

os.environ["OUTREACH_DATA_FILE"] = tempfile.mktemp(suffix=".json")

from growthcrew.briefing import GATEWAY_FALLBACK_MODELS
from growthcrew.normalize import normalize_coreclaw_places, normalize_csv_leads, normalize_openai_base, render_template
from growthcrew.service import public_settings
from growthcrew.ai import list_gateway_models


SETTINGS = {
    "ai": {"provider": "gateway", "model": "auto", "endpoint": "http://localhost:4000", "apiKey": "sk-test"},
    "brand": {
        "name": "In2Peta",
        "website": "https://in2peta.io",
        "offer": "Private AI inference",
        "serviceFocus": "Custom AI inference deployment",
        "cta": "Book a call",
    },
    "email": {
        "senderName": "GrowthCrew",
        "template": "Hi {{first_name}} at {{company}} — {{service_focus}} in {{city}}",
        "centralInbox": "replies@example.com",
        "physicalAddress": "",
        "unsubscribeUrl": "",
    },
    "campaign": {"concurrency": 10, "maxSendsPerInbox": 200},
    "sending": {"mode": "manual"},
}


class GrowthcrewNormalizeTests(unittest.TestCase):
    def test_gateway_fallbacks(self):
        self.assertEqual(GATEWAY_FALLBACK_MODELS[0], "gpt-oss-120b")
        self.assertIn("minmax-m3", GATEWAY_FALLBACK_MODELS)

    def test_public_settings_hide_gateway_key(self):
        public = public_settings(SETTINGS)
        self.assertTrue(public["ai"]["gatewayManaged"])
        self.assertTrue(public["ai"]["hasApiKey"])
        self.assertEqual(public["ai"]["apiKey"], "")

    def test_gateway_discovery_unreachable(self):
        self.assertEqual(list_gateway_models("http://127.0.0.1:9", "sk-test"), [])

    def test_openai_base(self):
        self.assertEqual(normalize_openai_base("https://code.in2peta.com"), "https://code.in2peta.com/v1")
        self.assertEqual(normalize_openai_base("https://code.in2peta.com/"), "https://code.in2peta.com/v1")
        self.assertEqual(normalize_openai_base("https://api.openai.com/v1"), "https://api.openai.com/v1")
        self.assertEqual(normalize_openai_base("https://code.in2peta.com/v1/chat/completions"), "https://code.in2peta.com/v1")

    def test_coreclaw_verified_emails(self):
        leads = normalize_coreclaw_places([{
            "name": "Vector Systems",
            "company_name": "Vector Systems",
            "owner_title": "VP Engineering",
            "phone": ["(510) 555-0100"],
            "city": "Boston",
            "company_email": [
                {"email": "invalid@example.test", "email_status": "invalid"},
                {"email": "owner@vector.test", "email_status": "valid", "email_is_business": True},
            ],
        }])
        self.assertEqual(len(leads), 1)
        self.assertEqual(leads[0]["email"], "owner@vector.test")
        self.assertEqual(leads[0]["phone"], "(510) 555-0100")
        self.assertTrue(leads[0]["isBusinessEmail"])

    def test_places_without_email_are_dropped(self):
        self.assertEqual(normalize_coreclaw_places([{"name": "No Email", "website": "https://example.test"}]), [])

    def test_csv_and_template(self):
        leads = normalize_csv_leads("Name,Email,Company,Title\nPriya Nair,priya@example.com,Vector Systems,VP Engineering")
        self.assertEqual(len(leads), 1)
        rendered = render_template(SETTINGS["email"]["template"], leads[0], SETTINGS)
        self.assertEqual(rendered, "Hi Priya at Vector Systems — Custom AI inference deployment in your area")


if __name__ == "__main__":
    unittest.main()
