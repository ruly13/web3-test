 Web3 Dashboard - Design System & Implementation Guide (v2.0 - Final)

## 1. Project Philosophy
This document is the **Single Source of Truth** for the Web3 Dashboard project.
- **Goal:** Pixel-perfect replication of `screen.png` using React + Tailwind.
- **Strict Rule:** **CLEAN ARCHITECTURE.** Do not dump everything into one file. Do not put global assets (`<style>`, `<link>`, `<meta>`) inside JSX components.
- **Tech Stack:** React (Vite), Tailwind CSS, RainbowKit (Custom UI), Wagmi.

---

## 2. File Structure & Asset Placement (CRITICAL)
The AI Agent must follow this file structure to ensure a production-ready app.

### A. `index.html` (Global Assets)
**Do NOT** put these in JSX. Place them in the `<head>` of `index.html`:
- **Fonts:** Google Fonts (Inter).
- **Icons:** Material Symbols Outlined (Google Fonts).
- **Meta:** Viewport and Charset settings.
- **Theme:** Ensure `<html class="dark">` is set by default.

### B. `src/index.css` (Global Styles)
**Do NOT** use `dangerouslySetInnerHTML` for styles. Put these rules in `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 1. Custom Scrollbar */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #131022; }
::-webkit-scrollbar-thumb { background: #2b2839; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #3713ec; }

/* 2. Material Symbols Fix */
.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
.material-symbols-outlined.filled { font-variation-settings: 'FILL' 1; }

/* 3. Base Settings */
body { @apply bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-hidden selection:bg-primary selection:text-white; }
3. Tailwind Configuration (tailwind.config.js)Use this exact configuration. Do not hallucinate new colors.JavaScriptexport default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#3713ec",        // Brand Purple
        "background-light": "#f6f6f8",
        "background-dark": "#131022", // Main Background (Deepest Dark)
        "card-dark": "#1e1c29",       // Cards/Panels
        "border-dark": "#2b2839",     // Borders
        "success": "#0bda6c",         // Green
        "danger": "#fa6938",          // Red/Orange
        "text-muted": "#a19db9"       // Grey/Purple Text
      },
      fontFamily: { "display": ["Inter", "sans-serif"] },
      boxShadow: { 'glow': '0 0 15px rgba(55,19,236,0.3)' }
    },
  },
  plugins: [],
}
4. Component ArchitectureA. src/components/Sidebar.jsxLogic: Use useAccount() from Wagmi.Profile Section (Bottom):If Connected: Show user avatar (gradient from-primary to-purple-500) + truncated address.If Disconnected: Show "Wallet not connected" or hide the section.Navigation: Use <a> or <Link>. Active state has bg-primary/10.B. src/components/WalletButton.jsx (RainbowKit Custom)Requirement: Do NOT use the default <ConnectButton />. Create a custom component using <ConnectButton.Custom>.Connection StateVisual Style (Tailwind Classes)Disconnectedbg-primary hover:bg-primary/90 text-white font-bold shadow-glow rounded-lg px-4 py-2Wrong Networkbg-danger text-white font-bold rounded-lg px-4 py-2ConnectedNetwork Pill: bg-card-dark border border-border-dark (Green Dot inside)Address Pill: bg-card-dark border border-border-dark font-boldC. src/components/Header.jsxSearch Bar: Input with bg-card-dark, no border, focus:ring-primary.Right Side: Place <WalletButton /> here (replacing the static HTML button).D. src/components/Dashboard.jsx (Content)Charts: Use Raw SVG & CSS Gradients only. (See Section 5).Stats Cards: Grid Layout (1 col mobile -> 4 cols desktop).5. Visual Asset Implementation (Strict)The "Wave" Chart (Portfolio)Do not use chart libraries. Use this SVG logic to match the design perfectly:Gradient Fill: <linearGradient> #3713ec (0.4 opacity) -> Transparent.Line Stroke: #3713ec, width 3px.Background Glow: absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl.The "Donut" Chart (Allocation)Use CSS Conic Gradient. Do not use Recharts.JavaScriptstyle={{ background: "conic-gradient(#3713ec 0% 55%, #0bda6c 55% 80%, #fa6938 80% 90%, #a19db9 90% 100%)" }}
Hollow Center: Place a div with bg-card-dark inside to create the ring effect.6. Implementation Checklist for AI Agent[ ] Clean JSX: Ensure NO <style>, <link>, or <meta> tags exist in any .jsx file. Move them to HTML/CSS files.[ ] RainbowKit Integration: Verify WalletButton.jsx is used in the Header instead of a static button.[ ] Tailwind Config: Verify tailwind.config.js matches the colors provided above exactly.[ ] Chart Accuracy: Verify charts are implemented using SVG/CSS as specified, not using Chart.js/Recharts.[ ] Responsiveness: Ensure Sidebar is hidden lg:flex and Mobile Menu button is lg:hidden.