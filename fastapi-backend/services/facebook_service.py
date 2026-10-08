import requests
from typing import Dict, Any, Optional

class FacebookService:
    GRAPH_API_VERSION = "v21.0"
    GRAPH_API_URL = f"https://graph.facebook.com/{GRAPH_API_VERSION}"

    @classmethod
    def verify_token(cls, page_id: str, access_token: str) -> Dict[str, Any]:
        """
        Verify if the given Facebook Page Access Token is valid and has publishing permissions.
        """
        try:
            res = requests.get(
                f"{cls.GRAPH_API_URL}/{page_id}",
                params={
                    "fields": "id,name,link,can_post",
                    "access_token": access_token
                },
                timeout=10
            )
            data = res.json()
            if not res.ok:
                error = data.get("error", {})
                return {
                    "valid": False,
                    "error": error.get("message", f"HTTP {res.status_code}"),
                    "code": error.get("code")
                }
            return {
                "valid": True,
                "id": data.get("id"),
                "name": data.get("name"),
                "link": data.get("link"),
                "can_post": data.get("can_post", True)
            }
        except Exception as e:
            return {"valid": False, "error": str(e)}

    @classmethod
    def publish_post(
        cls,
        page_id: str,
        access_token: str,
        message: str,
        image_url: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Directly publish a post with photo or text to the Facebook Page using Meta Graph API.
        """
        if not access_token:
            raise ValueError("Facebook Page Access Token is required.")

        clean_message = message.replace("<p>", "").replace("</p>", "\n\n").replace("<br/>", "\n").replace("<br>", "\n").strip()

        # If image is attached, publish photo post directly to Facebook Page Photos
        if image_url:
            res = requests.post(
                f"{cls.GRAPH_API_URL}/{page_id}/photos",
                params={"access_token": access_token},
                json={
                    "url": image_url,
                    "caption": clean_message,
                    "published": True
                },
                timeout=30
            )
            data = res.json()
            if not res.ok:
                err_msg = data.get("error", {}).get("message", f"Facebook API error: {res.status_code}")
                raise RuntimeError(f"Meta Graph API error: {err_msg}")

            post_id = data.get("post_id") or data.get("id")
            return {
                "success": True,
                "id": data.get("id"),
                "postId": post_id,
                "url": f"https://www.facebook.com/{post_id}" if post_id else f"https://www.facebook.com/{page_id}"
            }

        # Text-only post to feed
        res = requests.post(
            f"{cls.GRAPH_API_URL}/{page_id}/feed",
            params={"access_token": access_token},
            json={
                "message": clean_message,
                "published": True
            },
            timeout=15
        )
        data = res.json()
        if not res.ok:
            err_msg = data.get("error", {}).get("message", f"Facebook API error: {res.status_code}")
            raise RuntimeError(f"Meta Graph API error: {err_msg}")

        post_id = data.get("id")
        return {
            "success": True,
            "id": post_id,
            "postId": post_id,
            "url": f"https://www.facebook.com/{post_id}" if post_id else f"https://www.facebook.com/{page_id}"
        }
