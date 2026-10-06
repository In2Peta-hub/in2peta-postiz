import json
import re
import requests
from typing import Dict, Any, Optional, List
from config import CONFIG

class GeminiService:
    @staticmethod
    def generate_post(
        topic: str,
        tone: str = "Warm & Friendly",
        format_type: str = "feed",
        call_to_action: str = "",
        custom_instructions: str = ""
    ) -> Dict[str, Any]:
        is_reel = format_type == "reel"

        cta_clause = (
            f"Call To Action: {call_to_action}"
            if call_to_action
            else "Call To Action: Generate a natural, organic call to action at the end of the caption tailored specifically to this topic."
        )
        custom_clause = f"Special Instructions: {custom_instructions}" if custom_instructions else ""

        storyboard_template = """[
    {"second": "0-3s", "visual": "Punchy hook scene description", "audio": "Voiceover / sound effect"},
    {"second": "3-15s", "visual": "Core tip or visual transformation", "audio": "Voiceover value drop"},
    {"second": "15-20s", "visual": "Closing screen with CTA", "audio": "Call to action audio cue"}
  ]""" if is_reel else "null"

        prompt = f"""You are Growthcrew AI, an elite Instagram social media strategist and creative director.
Generate a captivating, high-performing Instagram {'Reel script and visual concept' if is_reel else 'feed post and visual asset'}.

Topic / Theme: {topic}
Tone of Voice: {tone}
Format: {'Instagram Reel (Short-form Video)' if is_reel else 'Instagram Feed Post (Image/Carousel)'}
{cta_clause}
{custom_clause}

CRITICAL INSTAGRAM GUIDELINES:
- The hook MUST be punchy and under 125 characters so it hooks viewers before the "...more" button.
- Use natural line breaks between paragraphs and tasteful, aesthetic emojis.
- Include 5 to 8 targeted hashtags.
- Generate an inspiring visual direction for an AI image or video shoot.
- Provide a curated visual keyword for high-resolution stock/AI visualization (e.g. "modern living room", "sunset patio", etc.).

Respond ONLY with a valid JSON object matching the following structure (no markdown formatting, no code block backticks):
{{
  "hook": "A scroll-stopping opening hook (under 125 characters)",
  "caption": "The main Instagram caption. Well-spaced with line breaks and emojis. Do not repeat the hook or hashtags here.",
  "hashtags": ["#Tag1", "#Tag2", "#Tag3", "#Tag4", "#Tag5"],
  "visualPrompt": "Detailed creative direction for an AI-generated image or video scene",
  "visualKeyword": "2-3 word search keyword for realistic imagery",
  "reelStoryboard": {storyboard_template}
}}"""

        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "temperature": 0.7,
                "topP": 0.95
            }
        }

        candidate_models = [
            CONFIG.GEMINI_MODEL or "gemini-3.5-flash-lite",
            "gemini-3.5-flash-lite",
            "gemini-3-flash-preview",
            "gemini-3.1-flash-lite",
            "gemini-3.6-flash",
            "gemini-3.5-flash",
        ]
        unique_models = list(dict.fromkeys(candidate_models))

        raw_text = None

        for model in unique_models:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={CONFIG.GEMINI_API_KEY}"
            try:
                res = requests.post(url, json=payload, headers={"Content-Type": "application/json"}, timeout=8)
                if res.status_code == 200:
                    data = res.json()
                    candidates = data.get("candidates", [])
                    if candidates and "content" in candidates[0]:
                        parts = candidates[0]["content"].get("parts", [])
                        if parts and "text" in parts[0]:
                            raw_text = parts[0]["text"]
                            print(f"✨ Successfully generated caption using {model}")
                            break
            except Exception as e:
                print(f"⚠️ Model {model} request notice: {e}")

        if not raw_text:
            print("⚠️ Google Gemini API temporarily busy, utilizing Growthcrew smart creative fallback.")
            return {
                "hook": f"Ever wonder what goes into {topic}? ✨",
                "caption": f"At Growthcrew, we believe that real craftsmanship lives in the small details.\n\nFrom the first concept to the final polish, every single step is taken into thoughtful consideration.\n\nBecause when you sweat the small stuff, the big picture takes care of itself. 🚀\n\n{call_to_action or 'What are your thoughts on this? Tell us below! 👇'}",
                "hashtags": ["#GROWTHCREW", "#CreativeAgency", "#Innovation", "#DesignDetails", "#QualityFirst"],
                "visualPrompt": f"High aesthetic modern workspace photography representing {topic}",
                "visualKeyword": topic.split(" ")[0] if topic else "minimalist workspace",
                "reelStoryboard": None
            }

        clean_json = raw_text.strip()
        if clean_json.startswith("```json"):
            clean_json = clean_json[7:]
        elif clean_json.startswith("```"):
            clean_json = clean_json[3:]
        if clean_json.endswith("```"):
            clean_json = clean_json[:-3]
        clean_json = clean_json.strip()

        first_brace = clean_json.find("{")
        last_brace = clean_json.rfind("}")
        if first_brace != -1 and last_brace != -1 and last_brace > first_brace:
            clean_json = clean_json[first_brace:last_brace + 1]

        try:
            return json.loads(clean_json)
        except Exception:
            return {
                "hook": topic[:120],
                "caption": raw_text,
                "hashtags": ["#growthcrew", "#digitalstrategy", "#marketing", "#contentcreator"],
                "visualPrompt": f"A vibrant, modern visual representing {topic}",
                "visualKeyword": topic.split(" ")[0] if topic else "digital media",
                "reelStoryboard": None
            }
