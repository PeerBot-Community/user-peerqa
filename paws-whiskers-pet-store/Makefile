.PHONY: help dev build deploy clean install serve

# Default target
help:
	@echo "Available commands:"
	@echo "  dev     - Start development server"
	@echo "  build   - Build the project"
	@echo "  deploy  - Deploy to production"
	@echo "  serve   - Serve the built project locally"
	@echo "  clean   - Clean build artifacts"
	@echo "  install - Install dependencies"

# Development server
dev:
	@echo "Starting development server..."
	@if command -v python3 >/dev/null 2>&1; then \
		echo "Using Python 3 server on http://localhost:8000"; \
		python3 -m http.server 8000; \
	elif command -v python >/dev/null 2>&1; then \
		echo "Using Python 2 server on http://localhost:8000"; \
		python -m SimpleHTTPServer 8000; \
	else \
		echo "Python not found. Please install Python or use another web server."; \
		exit 1; \
	fi

# Build (for static sites, this might just copy files)
build:
	@echo "Building project..."
	@mkdir -p dist
	@cp -r *.html *.css *.js dist/ 2>/dev/null || true
	@echo "Build complete! Files are in dist/"

# Serve built project
serve: build
	@echo "Serving built project from dist/ on http://localhost:8080"
	@cd dist && python3 -m http.server 8080

# Deploy (placeholder - customize based on your deployment method)
deploy: build
	@echo "Deploying to production..."
	@echo "Note: Configure your deployment method (GitHub Pages, Netlify, etc.)"
	@echo "Files ready for deployment in dist/ directory"

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	@rm -rf dist/
	@echo "Clean complete!"

# Install dependencies (for this static site, mainly for development tools)
install:
	@echo "Installing dependencies..."
	@echo "This is a static site - no package manager dependencies required"
	@echo "Make sure you have Python installed for the development server"

# Quick preview without building
preview:
	@echo "Opening preview..."
	@if command -v open >/dev/null 2>&1; then \
		open index.html; \
	elif command -v xdg-open >/dev/null 2>&1; then \
		xdg-open index.html; \
	else \
		echo "Please open index.html in your browser"; \
	fi