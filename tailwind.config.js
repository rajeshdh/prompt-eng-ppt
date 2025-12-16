/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // High-contrast projector-friendly color scheme
        'proj-bg': '#FFFFFF',           // White background for maximum visibility
        'proj-surface': '#F8F9FA',      // Light gray for surfaces
        'proj-border': '#2C3E50',       // Dark blue-gray for borders
        'proj-text': '#1A1A1A',         // Almost black for main text
        'proj-heading': '#0D47A1',      // Deep blue for headings
        'proj-accent': '#1976D2',       // Bright blue for accents
        'proj-accent-dark': '#0D47A1',  // Darker blue for contrast
        'proj-code-bg': '#F5F7FA',      // Light background for code
        'proj-code-text': '#2C3E50',    // Dark text for code
        'proj-success': '#2E7D32',      // Dark green for success
        'proj-error': '#C62828',        // Dark red for errors
        'proj-warning': '#F57C00',      // Dark orange for warnings
        'proj-info': '#0277BD',         // Dark cyan for info
      },
    },
  },
  plugins: [],
}
