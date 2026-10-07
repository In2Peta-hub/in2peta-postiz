# React client — PostPulse Studio

Embed or run the Vite React app that hosts **PostPulse Studio** (social) and **GrowthCrew Outreach** (header mode toggle).

## Dependencies

```bash
cd client
bun install
```

Main UI libs: React, Tailwind, `lucide-react`.

## Run standalone

```bash
cd client
bun install
bun run dev
```

Open http://localhost:5173  

Point the client at FastAPI:

```env
# client/.env
VITE_API_URL=http://localhost:3005
```

Without `VITE_API_URL`, requests use relative `/api/*` (fine behind a proxy).

## Embed in another React app

Primary entry is `client/src/App.jsx` (login + PostPulse / GrowthCrew modes). GrowthCrew UI lives in `OutreachPanel.jsx`.

```jsx
import App from './App';

export function StudioPage() {
  return <App />;
}
```

Optional: `defaultTab="studio" | "queue" | "history" | "outreach"` — `"outreach"` opens GrowthCrew mode.

## Product modes (UI)

- **PostPulse** — Studio / Review & queue / Published  
- **GrowthCrew** — email outreach (`/api/growthcrew/*`)  

Do not brand the whole host app as Growthcrew unless you intend only the outreach mode.

## Build

```bash
cd client
bun run build
```
