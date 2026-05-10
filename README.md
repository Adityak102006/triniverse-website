# TRINIVERSE - Animation Studio Portfolio
This is the official portfolio and landing page for **TRINIVERSE**, a creative studio based in Lucknow specializing in bespoke motion graphics, high-energy AMVs, and cinematic visual design.
## Features
- **Immersive User Interface:** Futuristic, high-contrast, bold design emphasizing visual storytelling and cinematic flair.
- **Micro-interactions & Animations:** Polished, smooth entrance animations, hover states, and smooth reveals powered by `framer-motion`.
- **Responsive Layout:** Engineered precisely for both desktop/mobile usage, prioritizing crisp typography and touch-friendly navigation.
- **Key Display Sections:**
  - **Hero:** Introduction and aesthetic hooks.
  - **About:** The story and vision of the studio.
  - **Featured Work:** Recent project highlights and visual experiments.
  - **Reel:** Cinematic showreel callouts.
  - **Services:** Service offerings context and capabilities overview.
  - **Collab:** Calls to action for aspiring editors, animators, and talent.
  - **Contact:** Booking and collaboration forms, and social media connectivity.
## Tech Stack
This project is carefully structured for performance, scale, and rapid development iteration: 
- **React 19**
- **Vite** (Build Tool)
- **TypeScript** (Static Typing)
- **Tailwind CSS v4** (Styling standard)
- **Framer Motion** (`motion/react` for fluid animations and transitions)
- **Lucide React** (Vector iconography)
## Quick Start
Follow these steps to run the studio platform on your local machine:
1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   *The application will boot up at `http://localhost:3000`.*
3. **Build for Production:**
   ```bash
   npm run build
   ```
   *The optimized static assets will be outputted to the `dist` directory.*
## Project Structure
- `src/main.tsx` - Root app connection and global initialization.
- `src/index.css` - Tailwind imports, font imports, and custom global variables.
- `src/App.tsx` - Core layout combining all landing sections.
- `src/components/sections/` - Modular page segments (Hero, About, Services, FeaturedWork, Reel, Collab, Contact, Marquee, etc.).
## Customization & Content 
The website relies on React components enriched with `framer-motion` for entrance effects and visual momentum. 
- You can pinpoint textual copy, project cards, and gradient configurations directly inside each respective file under the `/src/components/sections/` directory.

*Motion by Design.*

