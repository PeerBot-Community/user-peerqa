# 🐾 Paws & Whiskers Pet Store

A modern, responsive landing page for a fictional pet store featuring premium pet supplies, services, and care products.

## ✨ Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Mobile navigation, contact forms, and newsletter signup
- **Fast Loading**: Optimized CSS and JavaScript with lazy loading
- **Accessibility**: Semantic HTML and keyboard navigation support
- **SEO Optimized**: Meta tags, structured markup, and semantic content

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **Vanilla JavaScript**: Interactive features without framework dependencies
- **Font Awesome**: Professional icons
- **Google Fonts**: Poppins font family for modern typography

## 📁 Project Structure

```
paws-whiskers-pet-store/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # Interactive functionality
├── images/             # Image assets (placeholder structure)
├── assets/             # Additional assets
├── Dockerfile          # Docker configuration
├── Makefile           # Build and deployment scripts
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Development Server

Run a local development server:

```bash
make dev
```

This will start a Python HTTP server on `http://localhost:8000`

### Available Commands

```bash
make help           # Show all available commands
make dev            # Start development server
make build          # Validate and build project
make clean          # Clean temporary files
make deploy-netlify # Deploy to Netlify
make deploy-vercel  # Deploy to Vercel
make deploy-surge   # Deploy to Surge.sh
make docker         # Build and run Docker container
make validate       # Validate HTML/CSS/JS
make stats          # Show project statistics
```

## 🐳 Docker Deployment

Build and run with Docker:

```bash
make docker
```

Or manually:

```bash
docker build -t paws-whiskers-petstore .
docker run -p 8080:80 paws-whiskers-petstore
```

Access the site at `http://localhost:8080`

## 🌐 Deployment Options

The project supports multiple deployment platforms:

### Netlify
```bash
npm install -g netlify-cli
make deploy-netlify
```

### Vercel
```bash
npm install -g vercel
make deploy-vercel
```

### Surge.sh
```bash
npm install -g surge
make deploy-surge
```

## 🎨 Design Features

- **Color Scheme**: Warm orange primary (#ff6b35), forest green secondary (#2c5530)
- **Typography**: Poppins font family for modern, readable text
- **Layout**: Mobile-first responsive design with CSS Grid and Flexbox
- **Animations**: Smooth transitions and scroll-triggered animations
- **Icons**: Font Awesome for consistent iconography

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Customization

### Colors
Update CSS custom properties in `:root`:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #2c5530;
    --accent-color: #ffd23f;
}
```

### Content
- Edit text content in `index.html`
- Replace placeholder images in `/images` directory
- Update contact information and social links

### Styling
- Modify `css/styles.css` for visual changes
- Component styles are organized by section
- Use existing CSS classes for consistency

## 📈 Performance Features

- **Lazy Loading**: Images load as they enter viewport
- **Optimized CSS**: Efficient selectors and minimal repaints
- **Compressed Assets**: Optimized for fast loading
- **Smooth Scrolling**: CSS scroll-behavior for better UX

## 🎯 Business Sections

1. **Hero**: Eye-catching intro with call-to-action buttons
2. **Features**: Key selling points with icons
3. **Products**: Product categories with hover effects
4. **Services**: Additional services offered
5. **Testimonials**: Customer reviews and ratings
6. **About**: Company story and statistics
7. **Contact**: Contact information and form

## 🤝 Contributing

This is a fictional demo project. For real-world use:

1. Replace placeholder content with actual business information
2. Add real product images and descriptions
3. Implement backend functionality for forms
4. Add payment processing for e-commerce features
5. Integrate with CMS for content management

## 📄 License

This project is created for demonstration purposes. Feel free to use as a template for your own pet store or similar business website.

---

Built with ❤️ for pet lovers everywhere! 🐕🐱