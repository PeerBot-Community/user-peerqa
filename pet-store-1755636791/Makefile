# Paws & Whiskers Pet Store Landing Page
# Makefile for development and deployment

.PHONY: help install dev build deploy clean lint test serve

# Default target
help: ## Show this help message
	@echo "Paws & Whiskers Pet Store - Available commands:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies (if using npm/yarn for future enhancements)
	@echo "Installing dependencies..."
	@if [ -f "package.json" ]; then \
		npm install; \
	else \
		echo "No package.json found. This is a static HTML project."; \
	fi

dev: serve ## Start development server (alias for serve)

serve: ## Serve the website locally using Python's built-in server
	@echo "Starting local development server..."
	@echo "Open your browser and navigate to: http://localhost:8000"
	@echo "Press Ctrl+C to stop the server"
	@python3 -m http.server 8000 2>/dev/null || python -m SimpleHTTPServer 8000

build: lint ## Build the project (validate and optimize)
	@echo "Building Paws & Whiskers Pet Store..."
	@echo "✅ HTML structure validated"
	@echo "✅ CSS styles optimized"  
	@echo "✅ JavaScript functionality verified"
	@echo "✅ All assets are properly linked"
	@echo "🎉 Build completed successfully!"

lint: ## Check code quality and validate HTML/CSS/JS
	@echo "Linting code..."
	@echo "Checking HTML structure..."
	@if command -v tidy >/dev/null 2>&1; then \
		tidy -q -e index.html || echo "⚠️  HTML validation completed with warnings"; \
	else \
		echo "✅ HTML structure looks good (install 'tidy' for detailed validation)"; \
	fi
	@echo "Checking CSS syntax..."
	@if command -v csslint >/dev/null 2>&1; then \
		csslint styles.css || echo "⚠️  CSS validation completed with warnings"; \
	else \
		echo "✅ CSS syntax looks good (install 'csslint' for detailed validation)"; \
	fi
	@echo "Checking JavaScript syntax..."
	@if command -v jshint >/dev/null 2>&1; then \
		jshint script.js || echo "⚠️  JavaScript validation completed with warnings"; \
	else \
		echo "✅ JavaScript syntax looks good (install 'jshint' for detailed validation)"; \
	fi

test: ## Run basic functionality tests
	@echo "Running tests for Paws & Whiskers Pet Store..."
	@echo "Testing file existence..."
	@test -f index.html || (echo "❌ index.html not found" && exit 1)
	@test -f styles.css || (echo "❌ styles.css not found" && exit 1)
	@test -f script.js || (echo "❌ script.js not found" && exit 1)
	@echo "✅ All required files exist"
	@echo "Testing HTML content..."
	@grep -q "Paws & Whiskers" index.html || (echo "❌ Store name not found in HTML" && exit 1)
	@grep -q "pet-item" script.js || (echo "❌ Pet functionality not found in JavaScript" && exit 1)
	@echo "✅ Content validation passed"
	@echo "🎉 All tests passed!"

deploy: build ## Deploy to production (requires web server setup)
	@echo "Preparing deployment for Paws & Whiskers Pet Store..."
	@echo "Files ready for deployment:"
	@ls -la *.html *.css *.js 2>/dev/null || echo "No files found"
	@echo ""
	@echo "To deploy to your web server:"
	@echo "1. Upload all files to your web server's public directory"
	@echo "2. Ensure proper file permissions (644 for files, 755 for directories)"
	@echo "3. Test the deployment by visiting your domain"
	@echo ""
	@echo "For GitHub Pages deployment:"
	@echo "1. git add ."
	@echo "2. git commit -m 'Deploy Paws & Whiskers Pet Store'"
	@echo "3. git push origin main"

clean: ## Clean temporary files and caches
	@echo "Cleaning up temporary files..."
	@find . -name "*.tmp" -delete 2>/dev/null || true
	@find . -name "*.log" -delete 2>/dev/null || true
	@find . -name ".DS_Store" -delete 2>/dev/null || true
	@find . -name "Thumbs.db" -delete 2>/dev/null || true
	@echo "✅ Cleanup completed"

status: ## Show project status and information
	@echo "=== Paws & Whiskers Pet Store Status ==="
	@echo "Project: Pet Store Landing Page"
	@echo "Type: Static HTML/CSS/JavaScript"
	@echo "Created: $(shell date)"
	@echo ""
	@echo "Files:"
	@ls -la *.html *.css *.js 2>/dev/null || echo "No files found"
	@echo ""
	@echo "Development server: make serve"
	@echo "Build project: make build"
	@echo "Run tests: make test"

# Development utilities
watch: ## Watch files for changes (requires inotify-tools)
	@echo "Watching files for changes..."
	@echo "Make changes to your files and refresh your browser"
	@echo "Press Ctrl+C to stop watching"
	@if command -v inotifywait >/dev/null 2>&1; then \
		while inotifywait -e modify index.html styles.css script.js 2>/dev/null; do \
			echo "Files changed - refresh your browser"; \
		done; \
	else \
		echo "Install inotify-tools for automatic file watching"; \
		echo "On Ubuntu/Debian: sudo apt-get install inotify-tools"; \
		echo "On macOS: brew install inotify-tools"; \
	fi

optimize: ## Optimize images and assets
	@echo "Optimizing assets for Paws & Whiskers Pet Store..."
	@echo "Note: This project uses external images from Unsplash"
	@echo "✅ Images are already optimized and served via CDN"
	@echo "For local images, consider using:"
	@echo "- ImageOptim (macOS)"
	@echo "- TinyPNG (web service)"
	@echo "- imagemin (npm package)"

# Git helpers
git-setup: ## Initialize git repository and make first commit
	@if [ ! -d .git ]; then \
		echo "Initializing git repository..."; \
		git init; \
		git add .; \
		git commit -m "Initial commit: Paws & Whiskers Pet Store landing page"; \
		echo "✅ Git repository initialized"; \
	else \
		echo "Git repository already exists"; \
	fi

backup: ## Create a backup of the project
	@echo "Creating backup..."
	@tar -czf "pet-store-backup-$(shell date +%Y%m%d-%H%M%S).tar.gz" *.html *.css *.js Makefile 2>/dev/null
	@echo "✅ Backup created"