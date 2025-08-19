# 🐾 Paws & Whiskers Pet Store

A beautiful, responsive landing page for a fictional pet store featuring adoptable pets, services, and contact information.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Pet Gallery**: Filter pets by type (Dogs, Cats, Exotic)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Pet Adoption System**: Browse available pets with detailed information
- **Services Section**: Showcase of pet store services
- **Contact Form**: Interactive contact form for customer inquiries
- **Mobile Navigation**: Hamburger menu for mobile devices

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Python 3.x (for local development server)

### Installation

1. Clone or download the project files
2. Navigate to the project directory
3. Use the Makefile commands for easy development

### Quick Start

```bash
# Serve the website locally
make serve

# Build and validate the project
make build

# Run tests
make test

# View all available commands
make help
```

## 📁 Project Structure

```
pet-store-1755636791/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── Makefile            # Build and development commands
└── README.md           # Project documentation
```

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `make serve` | Start local development server on port 8000 |
| `make build` | Build and validate the project |
| `make test` | Run basic functionality tests |
| `make lint` | Check code quality and validate files |
| `make clean` | Clean temporary files |
| `make status` | Show project information |
| `make deploy` | Instructions for deployment |
| `make help` | Show all available commands |

## 🎨 Design Features

### Color Scheme
- Primary: #FF6B6B (Coral Pink)
- Secondary: #667eea (Purple Blue)
- Background: #f8f9fa (Light Gray)
- Text: #333 (Dark Gray)

### Typography
- Font Family: Poppins (Google Fonts)
- Responsive font sizes
- Clean, readable hierarchy

### Interactive Elements
- Smooth scrolling navigation
- Hover effects on cards and buttons
- Mobile-friendly hamburger menu
- Filter functionality for pet gallery
- Form validation and feedback

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🐕 Pet Data

The site includes sample data for 12 adorable pets:
- 5 Dogs (Golden Retriever, German Shepherd, Labrador, Beagle, Bulldog)
- 4 Cats (Persian, Maine Coon, Black Cat, Orange Tabby, Siamese)
- 2 Exotic Pets (Cockatiel, Holland Lop Rabbit)

All pet images are sourced from Unsplash with proper attribution.

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- Optimized images via Unsplash CDN
- Minimal JavaScript bundle
- CSS Grid and Flexbox for efficient layouts
- Smooth animations with CSS transitions

## 🚀 Deployment

### Local Development
```bash
make serve
```
Visit `http://localhost:8000` in your browser.

### Production Deployment
1. Run `make build` to validate the project
2. Upload all files to your web server
3. Ensure proper file permissions (644 for files, 755 for directories)

### GitHub Pages
1. Push to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

## 📝 Customization

### Adding New Pets
Edit the `pets` array in `script.js`:
```javascript
{
    id: 13,
    name: "New Pet Name",
    type: "dogs", // or "cats", "exotic"
    breed: "Pet Breed",
    age: "Age",
    gender: "Male/Female",
    description: "Pet description...",
    image: "image-url"
}
```

### Changing Colors
Update CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #FF6B6B;
    --secondary-color: #667eea;
    --background-color: #f8f9fa;
}
```

### Modifying Content
- Update store information in `index.html`
- Modify services in the services section
- Change contact details in the contact section

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test with `make test`
5. Submit a pull request

## 📄 License

This project is created for demonstration purposes. All pet images are from Unsplash and are free to use.

## 🙏 Acknowledgments

- Pet images courtesy of [Unsplash](https://unsplash.com)
- Icons using emoji for universal compatibility
- Google Fonts for typography
- Inspiration from modern pet adoption websites

## 📞 Support

For questions or support regarding this project, please create an issue in the repository.

---

Made with ❤️ for pets and their families!