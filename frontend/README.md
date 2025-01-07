# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Tailwind CSS

This repository uses [Tailwind CSS](https://tailwindcss.com/docs/) for frontend design. We will update `base.css` with our custom CSS, and have Tailwind compile it with the command
`npx tailwindcss -i ./src/base.css -o ./src/index.css --watch`.

# Todo
- Fix the mobile menu. Submenus should expand in there too
- Rearrange the layout of the content
- Crop and move Waddles relative to the size of the hero
- Add the content, and link the navbar items to respective documentation.
- Staff Hours Page