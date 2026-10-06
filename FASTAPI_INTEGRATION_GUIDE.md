# 🚀 FastAPI Backend Integration Guide (for Ruchir's Website)

This guide walks through how to integrate the **Growthcrew Social Studio API** into your existing FastAPI backend in under 2 minutes.

---

## 📦 1. Installation

Install the required dependencies in your Python virtual environment:

```bash
cd fastapi-backend
pip install -r requirements.txt
```

*(Key libraries used: `fastapi`, `uvicorn`, `boto3`, `requests`, `pydantic`, `python-dotenv`)*

---

## ⚙️ 2. Environment Variables

Create or update your `.env` file with your API keys:

```env
# Google Gemini 2.0 / 1.5 AI Key
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-3.5-flash

# AWS S3 Direct Cloud Uploads
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=ap-southeast-2
S3_BUCKET=in2peta-postiz-media

# Optional: Postiz Multi-Channel Headless Publisher (Port 4007)
POSTIZ_API_URL=http://localhost:4007/api/public/v1
POSTIZ_API_KEY=
```

> **Note:** If AWS credentials or Postiz are not configured, the API operates automatically in **Standalone Fallback Mode** with persistent JSON storage (`data/data.json`) and high-speed mock previews.

---

## 🔌 3. Mounting the Router in Your FastAPI Application

You can include the Growthcrew Studio router directly into your existing FastAPI `main.py` or app factory:

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import the Growthcrew Studio Router
from fastapi_backend.routers.studio_router import router as growthcrew_router

app = FastAPI(title="My Combined Web Platform")

# Enable CORS for React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount the Growthcrew Studio endpoints under /api
app.include_router(growthcrew_router)
```

---

## 📡 4. Available Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health status, active AI engine, and S3 status |
| `GET` | `/api/channels` | Returns connected Meta (Instagram & Facebook) channels |
| `POST` | `/api/channels` | Connect / update a social channel |
| `POST` | `/api/upload` | Direct multipart or Base64 upload to AWS S3 |
| `POST` | `/api/generate` | AI caption, viral hook & hashtag generator with auto-publish |
| `GET` | `/api/queue` | List scheduled, pending review, drafts, and published posts |
| `POST` | `/api/queue/{id}/approve` | Approve a post for publishing |
| `POST` | `/api/queue/{id}/publish-now` | Immediate instant publishing |
| `PUT` | `/api/queue/{id}` | Edit caption, hook, hashtags, or schedule date |
| `DELETE` | `/api/queue/{id}` | Remove post from queue |
| `GET` | `/api/settings` | Get user preferences & auto-approve toggle |
| `POST` | `/api/settings` | Update auto-approve or schedule delay |

---

## 🏃 5. Running the Standalone FastAPI Server

To test the backend standalone on port `3005`:

```bash
cd fastapi-backend
uvicorn main:app --port 3005 --reload
```

Interactive Swagger API Documentation:
[`http://localhost:3005/docs`](http://localhost:3005/docs)
