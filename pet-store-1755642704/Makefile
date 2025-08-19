.PHONY: help serve build clean install dev

# Default target
help:
	@echo "🐾 Paws & Whiskers Pet Store - Available Commands:"
	@echo ""
	@echo "  serve     - Start local development server (Python)"
	@echo "  dev       - Start local development server (Node.js)"
	@echo "  build     - Create production build"
	@echo "  clean     - Clean build artifacts"
	@echo "  install   - Install dependencies"
	@echo "  help      - Show this help message"
	@echo ""

# Start local development server using Python's built-in server
serve:
	@echo "🚀 Starting development server..."
	@echo "📍 Opening http://localhost:8000"
	@echo "🛑 Press Ctrl+C to stop"
	@python3 -m http.server 8000

# Alternative development server using Node.js (if available)
dev:
	@echo "🚀 Starting Node.js development server..."
	@echo "📍 Opening http://localhost:3000"
	@if command -v npx >/dev/null 2>&1; then \
		npx serve -s . -l 3000; \
	else \
		echo "❌ Node.js/npx not found. Using Python server instead..."; \
		make serve; \
	fi

# Create production build (minify CSS/JS)
build:
	@echo "🔨 Building production version..."
	@mkdir -p dist
	@cp index.html dist/
	@echo "📦 Minifying CSS..."
	@if command -v cleancss >/dev/null 2>&1; then \
		cleancss -o dist/styles.css styles.css; \
	else \
		cp styles.css dist/; \
		echo "⚠️  cleancss not found, copied CSS without minification"; \
	fi
	@echo "📦 Minifying JavaScript..."
	@if command -v uglifyjs >/dev/null 2>&1; then \
		uglifyjs script.js -o dist/script.js -c -m; \
	else \
		cp script.js dist/; \
		echo "⚠️  uglifyjs not found, copied JS without minification"; \
	fi
	@echo "✅ Build complete! Files are in the 'dist' directory"

# Install build dependencies
install:
	@echo "📦 Installing build dependencies..."
	@if command -v npm >/dev/null 2>&1; then \
		npm install -g clean-css-cli uglify-js serve; \
		echo "✅ Dependencies installed successfully"; \
	else \
		echo "❌ npm not found. Please install Node.js first"; \
		echo "💡 You can still use 'make serve' with Python"; \
	fi

# Clean build artifacts
clean:
	@echo "🧹 Cleaning build artifacts..."
	@rm -rf dist/
	@echo "✅ Clean complete!"

# Deploy to GitHub Pages (if repository is set up)
deploy:
	@echo "🚀 Deploying to GitHub Pages..."
	@if [ -d ".git" ]; then \
		make build; \
		git add dist/; \
		git commit -m "Deploy: Update GitHub Pages build"; \
		git push origin main; \
		echo "✅ Deployed successfully!"; \
	else \
		echo "❌ Not a git repository. Initialize git first."; \
	fi

# Validate HTML/CSS
validate:
	@echo "🔍 Validating HTML and CSS..."
	@if command -v html5validator >/dev/null 2>&1; then \
		html5validator --root .; \
	else \
		echo "⚠️  html5validator not found. Install with: pip install html5validator"; \
	fi
	@echo "✅ Validation complete!"

# Open in browser
open:
	@echo "🌐 Opening website in browser..."
	@if command -v open >/dev/null 2>&1; then \
		open http://localhost:8000; \
	elif command -v xdg-open >/dev/null 2>&1; then \
		xdg-open http://localhost:8000; \
	else \
		echo "📍 Please open http://localhost:8000 in your browser"; \
	fi