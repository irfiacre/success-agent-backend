# Alaa Frontend

A Next.js application with a beautiful glassmorphism design and ChatGPT-like chat interface.

## Features

- **Home Page**: Glassmorphism background with text input and document upload
- **Chat Page**: ChatGPT-like interface for conversations
- **Smooth Transitions**: Framer Motion animations between pages
- **Modern Design**: Tailwind CSS with DM Sans font

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/
│   ├── page.tsx          # Home page with glassmorphism design
│   ├── chat/
│   │   └── page.tsx      # Chat interface page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles with Tailwind
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

