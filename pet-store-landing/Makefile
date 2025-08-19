.PHONY: dev start build clean install help

# Default target
help:
	@echo "Available commands for Paws & Whiskers Pet Store:"
	@echo "  make dev     - Start development server on port 8000"
	@echo "  make start   - Start production server on port 8000"
	@echo "  make build   - Build project (no build step needed for static site)"
	@echo "  make clean   - Clean temporary files"
	@echo "  make install - Install dependencies (none required)"
	@echo "  make help    - Show this help message"

# Development server
dev:
	@echo "🐾 Starting Paws & Whiskers Pet Store development server..."
	@echo "📱 Open http://localhost:8000 in your browser"
	@echo "🛑 Press Ctrl+C to stop the server"
	@python -m http.server 8000

# Production server (same as dev for static site)
start:
	@echo "🚀 Starting Paws & Whiskers Pet Store server..."
	@echo "🌐 Open http://localhost:8000 in your browser"
	@echo "🛑 Press Ctrl+C to stop the server"
	@python -m http.server 8000

# Build (no build step needed for static HTML/CSS/JS)
build:
	@echo "✅ No build step required for static site"
	@echo "📁 All files are ready for deployment"

# Clean temporary files
clean:
	@echo "🧹 Cleaning temporary files..."
	@find . -name "*.tmp" -delete 2>/dev/null || true
	@find . -name "*.log" -delete 2>/dev/null || true
	@find . -name ".DS_Store" -delete 2>/dev/null || true
	@echo "✅ Cleanup complete"

# Install dependencies (none required for static site)
install:
	@echo "📦 No dependencies to install for static site"
	@echo "✅ Ready to go!"