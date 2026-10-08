import time
import requests
from typing import Dict, Any, List, Optional
from config import CONFIG

is_postiz_offline = False
last_postiz_check_time = 0
POSTIZ_RETRY_INTERVAL = 60

class PostizService:
    @classmethod
    def get_headers(cls) -> Dict[str, str]:
        return {
            "Authorization": CONFIG.POSTIZ_API_KEY,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }

    @classmethod
    def is_offline(cls) -> bool:
        global is_postiz_offline
        return is_postiz_offline

    @classmethod
    def get_integrations(cls) -> List[Dict[str, Any]]:
        global is_postiz_offline, last_postiz_check_time
        now = time.time()
        if is_postiz_offline and (now - last_postiz_check_time) < POSTIZ_RETRY_INTERVAL:
            return []

        try:
            res = requests.get(
                f"{CONFIG.POSTIZ_API_URL}/integrations",
                headers=cls.get_headers(),
                timeout=6
            )
            if res.status_code == 200:
                if is_postiz_offline:
                    print("[INFO] Postiz service reconnected on port 4007")
                    is_postiz_offline = False
                return res.json()
        except Exception:
            last_postiz_check_time = time.time()
            if not is_postiz_offline:
                print("[INFO] Postiz service (port 4007) is offline. Operating in standalone studio mode.")
                is_postiz_offline = True
        return []

    @classmethod
    def create_post(
        cls,
        integration_id: str,
        content: str,
        scheduled_date: Optional[str] = None,
        post_type: str = "schedule",
        media_url: Optional[str] = None,
        media_type: str = "image",
        media_id: Optional[str] = None
    ) -> Dict[str, Any]:
        formatted_content = (
            content if content.startswith("<p>")
            else f"<p>{content.replace(chr(10) + chr(10), '</p><p>').replace(chr(10), '<br/>')}</p>"
        )

        image_array = []
        if media_url:
            image_array.append({
                "id": media_id or f"media_{int(time.time() * 1000)}",
                "path": media_url
            })

        if post_type == "now":
            target_date = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime(time.time() - 30))
        else:
            target_date = scheduled_date or time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime(time.time() + 3600))

        payload = {
            "type": post_type,
            "date": target_date,
            "shortLink": False,
            "tags": [],
            "posts": [
                {
                    "integration": {"id": integration_id},
                    "value": [
                        {
                            "content": formatted_content,
                            "image": image_array
                        }
                    ],
                    "settings": {}
                }
            ]
        }

        res = requests.post(
            f"{CONFIG.POSTIZ_API_URL}/posts",
            headers=cls.get_headers(),
            json=payload,
            timeout=45
        )
        if not res.ok:
            error_text = res.text
            try:
                err_data = res.json()
                msg = err_data.get("message") or err_data.get("msg") or str(err_data)
            except Exception:
                msg = error_text[:200] if error_text else f"HTTP {res.status_code}"
            raise RuntimeError(f"Postiz error ({res.status_code}): {msg}")

        try:
            return res.json()
        except Exception:
            return {"raw": res.text, "status": res.status_code}
