# Jeffrin Mathew Benny - Portfolio

A modern, professional portfolio website built with React, inspired by the Watson vCard template design.

## Features

✨ **Modern Design**
- Clean and professional UI/UX
- Watson-inspired vCard layout
- Smooth animations and transitions
- Responsive design for all devices

🎨 **Dark/Light Mode**
- Toggle between dark and light themes
- Persistent theme preference
- Smooth theme transitions

📱 **Fully Responsive**
- Mobile-first approach
- Optimized for tablets and desktops
- Hamburger menu for mobile devices

🚀 **Smooth Navigation**
- Single-page application
- Smooth scroll to sections
- Active section highlighting

## Sections

1. **Home** - Hero section with introduction and call-to-action
2. **About** - Detailed information about skills and background
3. **Experience** - Work experience timeline
4. **Portfolio** - Project showcases
5. **Achievements** - Awards and recognitions
6. **Contact** - Contact form and information

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables for theming
- **Modern JavaScript (ES6+)**

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd portfolio-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify:
   - Via Netlify CLI: `netlify deploy --prod --dir=dist`
   - Or drag and drop the `dist` folder to Netlify's web interface

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Customization

### Changing Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #00d4ff;
  --secondary-color: #0099ff;
  --accent-color: #ff006e;
  /* ... other variables */
}
```

### Updating Content

All content is in `src/App.jsx`. Update the data arrays:
- `skills` - Technical skills
- `experiences` - Work experience
- `projects` - Portfolio projects
- `achievements` - Awards and achievements

### Adding/Removing Sections

1. Add/remove section components in `App.jsx`
2. Update navigation menu items
3. Update scroll navigation logic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized with Vite for fast builds
- Lazy loading for better performance
- Minimal dependencies
- CSS animations for smooth interactions

## License

Personal portfolio - All rights reserved by Jeffrin Mathew Benny

## Contact

- **Email**: jeffrinmb@gmail.com
- **LinkedIn**: [linkedin.com/in/jeffrin-mathew-benny](https://linkedin.com/in/jeffrin-mathew-benny)
- **GitHub**: [github.com/jeffrinmb](https://github.com/jeffrinmb)
- **Twitter**: [@jeffrin_mb](https://twitter.com/jeffrin_mb)

---

Built with ❤️ using React and Vite
