# Tech Seekers — Company Portfolio Website

A production-ready company portfolio website for **Tech Seekers**, a mobile app development company specializing in Android and Flutter applications.

## 🚀 Tech Stack

- **React 18** + **Vite**
- **React Router v6**
- **Tailwind CSS**
- **Framer Motion**
- **React Helmet Async** (SEO)
- **GitHub Pages** deployment

## 📁 Project Structure

```
tech-seekers/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── 404.html          # GitHub Pages SPA routing fix
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── AppCard.jsx
│   │   ├── SectionHeader.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Apps.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── Terms.jsx
│   ├── data/
│   │   └── apps.json     # App data — edit this to add/update apps
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🛠 Setup & Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚢 Deploy to GitHub Pages

1. Install gh-pages: `npm install gh-pages --save-dev`
2. Update `homepage` in `package.json` with your GitHub username:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/tech-seekers"
   ```
3. Update `base` in `vite.config.js` to match your repo name
4. Update `basename` in `src/main.jsx` to match your repo name
5. Run: `npm run deploy`

## 📱 Adding New Apps

Edit `src/data/apps.json`:

```json
{
  "id": 7,
  "name": "Your App Name",
  "category": "Utility",
  "description": "Full description of the app shown on the Apps page.",
  "shortDesc": "One-line summary",
  "playStoreUrl": "https://play.google.com/store/apps/details?id=com.yourapp",
  "icon": "🎮",
  "color": "#f59e0b",
  "rating": "4.5",
  "downloads": "1K+"
}
```

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, featured apps, tech stack, why us |
| `/apps` | Full app showcase with category filter |
| `/about` | Company info, mission, values |
| `/services` | Services offered |
| `/contact` | Contact form + business info |
| `/privacy-policy` | GDPR/Play Store compliant privacy policy |
| `/terms` | Terms and conditions |

## 🎯 AppLovin / AdMob Approval Checklist

- ✅ Real company presence with named apps
- ✅ Published applications listed with Play Store links
- ✅ Privacy Policy page with advertising disclosure
- ✅ Terms & Conditions page
- ✅ Support contact information (email)
- ✅ Professional branding and design
- ✅ SEO meta tags, OpenGraph, Twitter Cards
- ✅ robots.txt and sitemap.xml
