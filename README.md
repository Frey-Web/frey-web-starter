<div align="center">
  <h1>Frey Web Starter</h1>
  <p>
    Schlankes <strong>React + TypeScript + Vite + Tailwind CSS</strong> Template für schnelle Kunden-Websites.<br />
    Mit Dark/Light Mode, adaptivem SVG-Favicon, optimiertem Bundle-Splitting und zentralem SEO-Manager.
  </p>
  <p>
    <img src="https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/License-Apache_2.0-6D5CE7?style=flat-square" alt="Apache 2.0 License" />
  </p>
</div>

## Features

- **Vite + TypeScript Strict Mode** — vorkonfiguriertes `@/` Path-Aliasing und sauberes Vendor-Chunking (`react`, `icons`) ohne dutzende Mini-Chunks.
- **Dark & Light Mode** — `ThemeProvider` mit System-Erkennung (`prefers-color-scheme`) und `localStorage`-Persistenz.
- **Adaptives SVG-Favicon** — wechselt automatisch zwischen heller und dunkler Tableiste.
- **Zentraler `SeoManager`** — setzt `<title>` und `<meta name="description">` pro Route.

## Schnellstart

```bash
npm install
npm run dev
```

Für den Produktions-Build:

```bash
npm run build
npm run preview
```

## Projektstruktur

```text
├── public/
│   ├── favicon.svg        # Adaptives Light/Dark SVG-Favicon
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── SeoManager.tsx
│   │   └── ThemeProvider.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
└── vite.config.ts
```

## Lizenz & Namensnennung

Lizenziert unter der **Apache License 2.0** ([LICENSE](./LICENSE)).
Bei jeder Nutzung, Weiterverbreitung oder Bearbeitung muss **Frey Web (`https://frey-web.com`)** gemäß der [NOTICE](./NOTICE)-Datei als Urheber genannt werden.
