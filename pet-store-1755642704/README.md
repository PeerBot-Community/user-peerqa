# 🐾 Paws & Whiskers Pet Store

A modern, responsive landing page for a fictional pet store featuring beautiful animations, interactive elements, and a professional design.

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Hover effects, smooth scrolling, and form validation
- **Performance Optimized** - Fast loading with optimized CSS and JavaScript
- **Accessibility** - Semantic HTML and keyboard navigation support

## 🚀 Quick Start

1. **Start Development Server**
   ```bash
   make serve
   ```
   Opens at http://localhost:8000

2. **Alternative Node.js Server**
   ```bash
   make dev
   ```
   Opens at http://localhost:3000

## 📁 Project Structure

```
pet-store-1755642704/
├── index.html      # Main HTML file
├── styles.css      # All CSS styles and animations
├── script.js       # Interactive JavaScript functionality
├── Makefile        # Development and build commands
└── README.md       # This file
```

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `make serve` | Start Python development server |
| `make dev` | Start Node.js development server |
| `make build` | Create minified production build |
| `make install` | Install build dependencies |
| `make clean` | Remove build artifacts |
| `make validate` | Validate HTML/CSS |
| `make help` | Show all available commands |

## 🎨 Design Features

### Color Palette
- Primary: `#667eea` to `#764ba2` (gradient)
- Accent: `#ff6b6b` to `#ee5a24` (gradient)
- Background: `#f8f9fa`
- Text: `#333` / `#666`

### Typography
- Font Family: Poppins (Google Fonts)
- Weights: 300, 400, 600, 700

### Sections
1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **Services** - Pet grooming, health checkups, training, and boarding
3. **Products** - Featured pet food, toys, treats, and accessories
4. **About** - Company story with statistics
5. **Contact** - Contact information and contact form
6. **Footer** - Links and social media

## 💻 Technical Details

### CSS Features
- CSS Grid and Flexbox for responsive layouts
- CSS Custom Properties (variables)
- Smooth animations and transitions
- Mobile-first responsive design
- Modern CSS techniques (backdrop-filter, etc.)

### JavaScript Features
- Mobile navigation toggle
- Smooth scrolling navigation
- Intersection Observer for scroll animations
- Form validation and submission
- Notification system
- Counter animations for statistics
- Parallax effects

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with graceful degradation)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #667eea;
  --accent-color: #ff6b6b;
  --background-color: #f8f9fa;
}
```

### Content
- Update business information in `index.html`
- Modify services and products sections
- Replace contact details

### Styling
- Adjust breakpoints in media queries
- Modify animation durations and effects
- Update typography and spacing

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🌟 Performance

- Optimized images using emojis (no external images needed)
- Minified CSS and JavaScript in production build
- Efficient animations using CSS transforms
- Minimal external dependencies (only Google Fonts)

## 🚀 Deployment

### GitHub Pages
```bash
make deploy
```

### Static Hosting
Upload the `dist/` folder (created with `make build`) to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

---

**Created with ❤️ for pet lovers everywhere! 🐕🐱🐰**