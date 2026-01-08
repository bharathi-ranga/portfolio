# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # My Portfolio

    A responsive personal portfolio built with React, Vite, TypeScript and Tailwind CSS.

    ## Features
    - Theme toggle (light / dark) with preference persistence
    - Projects grid with professional and personal projects (flip-on-hover for professional projects)
    - Skills with progress indicators and tech badges
    - Experience timeline, Education, and About / Summary sections
    - Resume download and contact links

    ## Built with
    - React + Vite + TypeScript
    - Tailwind CSS for utility-first styling
    - Framer Motion for subtle animations
    - lucide-react for icons

    ## Quick Start
    1. Install dependencies

    ```bash
    npm install
    ```

    2. Run development server

    ```bash
    npm run dev
    ```

    3. Build for production

    ```bash
    npm run build
    ```

    4. Preview production build

    ```bash
    npm run preview
    ```

    ## Project Structure (important files)
    - `src/main.tsx` — app entry
    - `src/App.tsx` — top-level layout
    - `src/components/portfolio` — sections: `Hero`, `Projects`, `Skills`, `Experience`, `Education`, `About`, `Navigation`
    - `public/` — static assets (profile image, resume PDF)
    - `tailwind.config.ts`, `vite.config.ts` — build / styling configs

    ## Resume & assets
    - Place your resume at `public/bharathi_r_resume.pdf` (or update the resume link in `Hero.tsx`).

    ## Notes
    - Theme is class-based: toggling adds/removes the `dark` class on the document root.
    - If you encounter build errors, run `npm run dev` and check the terminal for TypeScript/TSX parser errors introduced by malformed JSX.

    ## Contact
    - Email: ranga.bharathisri@gmail.com

    ## License
    - This repository is provided as-is. Add a license if you plan to open-source it.
