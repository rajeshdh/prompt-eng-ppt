# Prompt Engineering Workshop

An interactive React-based presentation for teaching prompt engineering concepts to developers.

**🔗 GitHub Repository:** [https://github.com/rajeshdh/prompt-eng-ppt](https://github.com/rajeshdh/prompt-eng-ppt)

## System Requirements

Before you begin, ensure you have the following installed on your laptop:

- **Node.js** (version 18.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor or IDE (VS Code recommended)

### Check Your Installation

Verify that Node.js and npm are installed:

```bash
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
```

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/rajeshdh/prompt-eng-ppt.git
cd prompt-eng-ppt
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages (React, Vite, Tailwind CSS, etc.)

### 3. Add Your Gemini API Key (Optional)

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

### 4. Start Development Server

```bash
npm run dev
```

The app will open automatically at `http://localhost:5173` (or another port if 5173 is busy)

You should see output like:
```
  VITE v5.4.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Open the URL in your browser and the presentation will load!

## Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Troubleshooting

### Port Already in Use

If you see an error like "Port 5173 is already in use":
```bash
# Kill the process using the port (Mac/Linux)
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Installation Errors

If `npm install` fails:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Try installing again
npm install
```

### Module Not Found Errors

Make sure you're in the correct directory:
```bash
cd prompt-eng-ppt  # or your cloned directory name
ls package.json    # Should show the package.json file
```

## Features

- 35 interactive slides covering prompt engineering concepts
- Live API playgrounds for testing prompts with real AI models
- Responsive design for desktop and mobile
- Speaker notes for presentations
- Keyboard navigation (Arrow keys, Space)
- Projector-friendly color scheme

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
