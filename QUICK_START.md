# 🚀 Quick Start Guide

## Your Modern Portfolio Website - Watson Style!

I've created a professional React portfolio inspired by the Watson vCard template with all your resume content.

---

## ✨ What You Got

### Features
- 🎨 **Dark/Light Mode Toggle** - Switch themes instantly
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎯 **Smooth Animations** - Professional transitions and effects
- 🧭 **Smart Navigation** - Smooth scrolling with active section highlighting
- 💼 **Complete Sections**: Home, About, Experience, Portfolio, Achievements, Contact

### Design Highlights
- Watson-inspired clean vCard design
- Modern gradient accents (cyan/blue theme)
- Professional timeline for experience
- Interactive skill badges
- Animated profile card
- Social media integration

---

## 🛠️ Installation (3 Steps)

### Step 1: Install Node.js
If you don't have Node.js installed:
- Visit: https://nodejs.org/
- Download and install the LTS version

### Step 2: Install Dependencies
Open terminal in the `portfolio-app` folder and run:
```bash
npm install
```

### Step 3: Run the App
```bash
npm run dev
```

Then open http://localhost:5173 in your browser!

---

## 📦 Deploy to Netlify (Easiest Method)

### Option A: Drag & Drop (No Command Line)

1. Build your site:
   ```bash
   npm run build
   ```

2. Go to https://app.netlify.com/drop

3. Drag the `dist` folder to the upload area

4. Done! Your site is live!

### Option B: Connect to GitHub

1. Push your code to GitHub

2. Go to https://app.netlify.com

3. Click "New site from Git"

4. Select your repository

5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Click "Deploy site"

---

## 🎨 Customization Guide

### Change Colors

Edit `src/App.css` (lines 1-11):

```css
:root {
  --primary-color: #00d4ff;      /* Change main color */
  --secondary-color: #0099ff;    /* Change secondary color */
  --accent-color: #ff006e;       /* Change accent color */
}
```

Popular color schemes:
- **Purple/Pink**: `#8B5CF6` / `#EC4899`
- **Green/Teal**: `#10B981` / `#06B6D4`
- **Orange/Red**: `#F59E0B` / `#EF4444`

### Update Your Content

All content is in `src/App.jsx`:

1. **Skills** (line 18): Add/remove technical skills
2. **Experience** (line 25): Update job history
3. **Projects** (line 54): Modify project details
4. **Achievements** (line 78): Update awards
5. **Profile Image**: Replace the "JMB" placeholder with your photo

### Add Your Photo

Replace the profile placeholder (line 297 in App.jsx):
```jsx
<div className="profile-image-placeholder">
  <img src="/path-to-your-photo.jpg" alt="Jeffrin" />
</div>
```

---

## 📱 Test Responsiveness

- **Desktop**: Default view
- **Tablet**: Resize browser to 768px
- **Mobile**: Resize to 480px or use browser DevTools

---

## 🌐 Domain Setup

After deploying to Netlify:

1. Go to Site Settings → Domain Management
2. Add custom domain: `jeffrinmb.com` (or your domain)
3. Update DNS records as instructed
4. Enable HTTPS (automatic with Netlify)

---

## 🔧 Troubleshooting

### "Module not found" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm run build -- --mode production
```

### Port already in use
```bash
npm run dev -- --port 3000
```

---

## 📊 Project Structure

```
portfolio-app/
├── src/
│   ├── App.jsx          # Main component (edit content here)
│   ├── App.css          # Styles (edit colors here)
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Build configuration
```

---

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run locally: `npm run dev`
3. 🎨 Customize colors and content
4. 📸 Add your photo
5. 🚀 Build: `npm run build`
6. 🌐 Deploy to Netlify
7. 🎉 Share your portfolio!

---

## 💡 Pro Tips

- Use the theme toggle (sun/moon icon) to test both modes
- Test on mobile devices for best results
- Update meta tags in `index.html` for SEO
- Add Google Analytics if needed
- Keep dependencies updated: `npm update`

---

## 🆘 Need Help?

- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/
- **Netlify Docs**: https://docs.netlify.com/

---

**Your portfolio is ready to impress! 🎉**

Replace your current site at jeffrinmb.netlify.app with this new one!
