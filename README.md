# Prompt Engineering Workshop

An interactive React-based presentation for teaching prompt engineering concepts to developers.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Gemini API Key (Optional)

If you want to use the live playground features, add your Gemini API key:

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your API key:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

You can get a free API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

**Note:** The `.env` file is already in `.gitignore` to keep your API key secure.

### 3. Start Development Server

```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Features

- 24 interactive slides covering prompt engineering concepts
- Live API playgrounds for testing prompts
- Responsive design for desktop and mobile
- Speaker notes for presentations
- Keyboard navigation (Arrow keys, Space)

## Keyboard Shortcuts

- **Arrow Right / Space**: Next slide
- **Arrow Left**: Previous slide
- **S**: Toggle speaker notes

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)
- Gemini API (for live demos)

## License

MIT
