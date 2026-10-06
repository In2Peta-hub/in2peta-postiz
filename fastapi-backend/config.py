import os
from pathlib import Path
from dotenv import load_dotenv

# Load .env file from current directory or root
env_path = Path(__file__).parent / '.env'
if env_path.exists():
    load_dotenv(dotenv_path=env_path)
else:
    load_dotenv()

class Config:
    PORT: int = int(os.getenv("PORT", "3005"))
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    GEMINI_MODEL: str = os.getenv("GEMINI_MODEL", "gemini-3.5-flash")
    POSTIZ_API_URL: str = os.getenv("POSTIZ_API_URL", "http://localhost:4007/api/public/v1")
    POSTIZ_API_KEY: str = os.getenv("POSTIZ_API_KEY", "")
    S3_BUCKET: str = os.getenv("S3_BUCKET", "in2peta-postiz-media")
    AWS_REGION: str = os.getenv("AWS_REGION", "ap-southeast-2")
    AWS_ACCESS_KEY_ID: str = os.getenv("AWS_ACCESS_KEY_ID", "")
    AWS_SECRET_ACCESS_KEY: str = os.getenv("AWS_SECRET_ACCESS_KEY", "")

CONFIG = Config()
