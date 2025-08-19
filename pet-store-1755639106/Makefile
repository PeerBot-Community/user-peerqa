.PHONY: dev serve build clean install help

# Default target
help:
	@echo "Available commands:"
	@echo "  dev     - Start development server"
	@echo "  serve   - Serve the website locally"
	@echo "  build   - Build the project (currently just validates files)"
	@echo "  clean   - Clean temporary files"
	@echo "  install - Install dependencies (if any)"
	@echo "  help    - Show this help message"

# Development server using Python's built-in server
dev:
	@echo "Starting development server on http://localhost:8000"
	@echo "Press Ctrl+C to stop the server"
	@python3 -m http.server 8000 || python -m http.server 8000

# Alias for dev
serve: dev

# Build command (validates HTML and checks for missing files)
build:
	@echo "Building Pet Store Landing Page..."
	@echo "Checking if all files exist..."
	@test -f index.html || (echo "ERROR: index.html not found" && exit 1)
	@test -f styles.css || (echo "ERROR: styles.css not found" && exit 1)
	@test -f script.js || (echo "ERROR: script.js not found" && exit 1)
	@echo "✓ All files present"
	@echo "Validating HTML structure..."
	@grep -q "<!DOCTYPE html>" index.html || (echo "ERROR: Missing DOCTYPE" && exit 1)
	@grep -q "<title>" index.html || (echo "ERROR: Missing title tag" && exit 1)
	@echo "✓ HTML structure looks good"
	@echo "Checking CSS and JS links..."
	@grep -q "styles.css" index.html || (echo "ERROR: CSS not linked" && exit 1)
	@grep -q "script.js" index.html || (echo "ERROR: JS not linked" && exit 1)
	@echo "✓ All resources linked properly"
	@echo "Build completed successfully! 🎉"

# Clean temporary files
clean:
	@echo "Cleaning temporary files..."
	@find . -name "*.tmp" -delete 2>/dev/null || true
	@find . -name ".DS_Store" -delete 2>/dev/null || true
	@echo "Clean completed"

# Install dependencies (placeholder for future package management)
install:
	@echo "No dependencies to install for this static site"
	@echo "All required files are included in the project"

# Preview the site (opens in default browser if available)
preview:
	@echo "Opening site preview..."
	@(python3 -m http.server 8000 > /dev/null 2>&1 &)
	@sleep 2
	@echo "Server started on http://localhost:8000"
	@command -v open >/dev/null 2>&1 && open http://localhost:8000 || \
	 command -v xdg-open >/dev/null 2>&1 && xdg-open http://localhost:8000 || \
	 echo "Please open http://localhost:8000 in your browser"

# Stop any running development servers
stop:
	@echo "Stopping development servers..."
	@pkill -f "python.*http.server.*8000" 2>/dev/null || echo "No servers running on port 8000"

# Validate all project files
validate: build
	@echo "Running additional validations..."
	@echo "Checking for common HTML issues..."
	@! grep -i "lorem ipsum" index.html >/dev/null || echo "⚠️  Warning: Lorem ipsum text found"
	@grep -q "Paws & Whiskers" index.html && echo "✓ Site branding present"
	@echo "Validation completed"