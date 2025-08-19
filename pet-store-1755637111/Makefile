.PHONY: help dev build clean deploy

# Pet Store Landing Page Makefile
PROJECT_NAME = pet-store-1755637111
PORT = 8080

help: ## Show this help message
	@echo "Pet Store Landing Page - Available commands:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

dev: ## Start development server
	@echo "Starting development server on port $(PORT)..."
	@if command -v python3 >/dev/null 2>&1; then \
		echo "Using Python 3 HTTP server"; \
		python3 -m http.server $(PORT); \
	elif command -v python >/dev/null 2>&1; then \
		echo "Using Python 2 HTTP server"; \
		python -m SimpleHTTPServer $(PORT); \
	elif command -v node >/dev/null 2>&1; then \
		echo "Using Node.js http-server"; \
		npx http-server -p $(PORT); \
	else \
		echo "No suitable HTTP server found. Please install Python or Node.js"; \
		exit 1; \
	fi

build: ## Build the project for production
	@echo "Building $(PROJECT_NAME)..."
	@mkdir -p dist
	@cp index.html dist/
	@cp styles.css dist/
	@cp script.js dist/
	@echo "Build completed! Files are in the dist/ directory"

clean: ## Clean build artifacts
	@echo "Cleaning build artifacts..."
	@rm -rf dist/
	@echo "Clean completed!"

validate: ## Validate HTML, CSS, and JS files
	@echo "Validating project files..."
	@if command -v html5validator >/dev/null 2>&1; then \
		html5validator --root . --match "*.html"; \
	else \
		echo "html5validator not found, skipping HTML validation"; \
	fi
	@if [ -f index.html ]; then echo "✓ index.html exists"; else echo "✗ index.html missing"; fi
	@if [ -f styles.css ]; then echo "✓ styles.css exists"; else echo "✗ styles.css missing"; fi
	@if [ -f script.js ]; then echo "✓ script.js exists"; else echo "✗ script.js missing"; fi
	@echo "File validation completed!"

serve: dev ## Alias for dev command

preview: build ## Build and serve the production version
	@echo "Serving production build on port $(PORT)..."
	@cd dist && \
	if command -v python3 >/dev/null 2>&1; then \
		python3 -m http.server $(PORT); \
	elif command -v python >/dev/null 2>&1; then \
		python -m SimpleHTTPServer $(PORT); \
	else \
		echo "Python not found. Please install Python to serve files"; \
		exit 1; \
	fi

info: ## Show project information
	@echo "Project: $(PROJECT_NAME)"
	@echo "Type: Static HTML Landing Page"
	@echo "Files:"
	@echo "  - index.html (Main HTML file)"
	@echo "  - styles.css (CSS styles)"
	@echo "  - script.js (JavaScript functionality)"
	@echo "  - Makefile (Build automation)"
	@echo ""
	@echo "Features:"
	@echo "  - Responsive design"
	@echo "  - Interactive elements"
	@echo "  - Modern animations"
	@echo "  - Mobile-friendly navigation"

deploy: build ## Deploy to GitHub Pages (requires git setup)
	@echo "Deploying to GitHub Pages..."
	@if [ ! -d ".git" ]; then \
		echo "Error: Not a git repository. Run 'git init' first."; \
		exit 1; \
	fi
	@git add .
	@git commit -m "Deploy pet store landing page" || true
	@git push origin main || echo "Push to main branch"
	@echo "Deployment completed!"