# 💻 React Frontend Integration Guide (for Ruchir's Website)

This guide shows how to embed the **Growthcrew Social Studio** web application into any existing React project.

---

## 📦 1. Dependencies

In your React project root, ensure you have `lucide-react` and `tailwindcss` installed:

```bash
npm install lucide-react
```

---

## 🎨 2. Component Integration

Copy the `admin-approval-portal/client/src/App.jsx` (or `GrowthcrewStudio.jsx`) into your components folder and import it directly into your React Router or page:

```jsx
import React from 'react';
import { GrowthcrewStudio } from './components/GrowthcrewStudio';

export function SocialStudioPage() {
  return (
    <div className="w-full min-h-screen">
      <GrowthcrewStudio />
    </div>
  );
}
```

---

## ⚙️ 3. Configuring Backend API Endpoint

By default, the client makes relative requests to `/api/*` (ideal if running behind Vite proxy or Next.js rewrites).

If your FastAPI backend is running on a different port (e.g. `http://localhost:3005` or a deployed URL like `https://api.yourdomain.com`), set it in your `.env`:

```env
VITE_API_URL=http://localhost:3005
```

---

## 🚀 4. Running the Standalone React Web Client

```bash
cd admin-approval-portal/client
npm install
npm run dev
```

Open [`http://localhost:5173`](http://localhost:5173) in your browser.
