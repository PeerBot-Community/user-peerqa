# Paws & Whiskers Pet Store Landing Page
# Simple static website deployment

.PHONY: dev serve build clean deploy help

# Default target
help: ## Show this help message
	@echo "Paws & Whiskers Pet Store - Available Commands:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

dev: ## Start development server (Python)
	@echo "🐾 Starting development server..."
	@if command -v python3 >/dev/null 2>&1; then \
		echo "📡 Server running at http://localhost:8000"; \
		echo "Press Ctrl+C to stop"; \
		python3 -m http.server 8000; \
	elif command -v python >/dev/null 2>&1; then \
		echo "📡 Server running at http://localhost:8000"; \
		echo "Press Ctrl+C to stop"; \
		python -m SimpleHTTPServer 8000; \
	else \
		echo "❌ Python not found. Please install Python to run the development server."; \
		exit 1; \
	fi

serve: dev ## Alias for dev command

build: ## Build the project (validate and optimize)
	@echo "🔨 Building Paws & Whiskers Pet Store..."
	@echo "✅ Validating HTML structure..."
	@if [ -f "index.html" ]; then \
		echo "   ✓ index.html found"; \
	else \
		echo "   ❌ index.html missing"; exit 1; \
	fi
	@if [ -d "css" ]; then \
		echo "   ✓ CSS directory found"; \
	else \
		echo "   ❌ CSS directory missing"; exit 1; \
	fi
	@if [ -d "js" ]; then \
		echo "   ✓ JavaScript directory found"; \
	else \
		echo "   ❌ JavaScript directory missing"; exit 1; \
	fi
	@echo "✅ Project structure validated successfully!"
	@echo "🎉 Build complete! Ready for deployment."

clean: ## Clean temporary files
	@echo "🧹 Cleaning temporary files..."
	@find . -name ".DS_Store" -delete 2>/dev/null || true
	@find . -name "Thumbs.db" -delete 2>/dev/null || true
	@find . -name "*.tmp" -delete 2>/dev/null || true
	@echo "✅ Cleanup complete!"

deploy-netlify: build ## Deploy to Netlify (requires netlify-cli)
	@echo "🚀 Deploying to Netlify..."
	@if command -v netlify >/dev/null 2>&1; then \
		netlify deploy --prod --dir=. --message="Deploy Paws & Whiskers Pet Store"; \
	else \
		echo "❌ Netlify CLI not found. Install with: npm install -g netlify-cli"; \
		exit 1; \
	fi

deploy-vercel: build ## Deploy to Vercel (requires vercel-cli)
	@echo "🚀 Deploying to Vercel..."
	@if command -v vercel >/dev/null 2>&1; then \
		vercel --prod; \
	else \
		echo "❌ Vercel CLI not found. Install with: npm install -g vercel"; \
		exit 1; \
	fi

deploy-surge: build ## Deploy to Surge.sh (requires surge-cli)
	@echo "🚀 Deploying to Surge.sh..."
	@if command -v surge >/dev/null 2>&1; then \
		surge . --domain paws-whiskers-petstore.surge.sh; \
	else \
		echo "❌ Surge CLI not found. Install with: npm install -g surge"; \
		exit 1; \
	fi

docker: ## Build and run Docker container
	@echo "🐳 Building Docker container..."
	@docker build -t paws-whiskers-petstore .
	@echo "🚀 Starting container on port 8080..."
	@docker run -p 8080:80 paws-whiskers-petstore

install-tools: ## Install common deployment tools
	@echo "🛠️  Installing deployment tools..."
	@if command -v npm >/dev/null 2>&1; then \
		echo "📦 Installing Netlify CLI..."; \
		npm install -g netlify-cli; \
		echo "📦 Installing Vercel CLI..."; \
		npm install -g vercel; \
		echo "📦 Installing Surge CLI..."; \
		npm install -g surge; \
		echo "✅ All tools installed!"; \
	else \
		echo "❌ Node.js/npm not found. Please install Node.js first."; \
		exit 1; \
	fi

validate: ## Validate HTML, CSS, and JS
	@echo "🔍 Validating project files..."
	@echo "Checking HTML syntax..."
	@if command -v tidy >/dev/null 2>&1; then \
		tidy -q -e index.html; \
	else \
		echo "   ⚠️  HTML Tidy not found (optional)"; \
	fi
	@echo "✅ Basic validation complete!"

stats: ## Show project statistics
	@echo "📊 Project Statistics:"
	@echo "   HTML files: $$(find . -name '*.html' | wc -l)"
	@echo "   CSS files:  $$(find . -name '*.css' | wc -l)"
	@echo "   JS files:   $$(find . -name '*.js' | wc -l)"
	@echo "   Images:     $$(find ./images -type f 2>/dev/null | wc -l || echo 0)"
	@echo "   Total size: $$(du -sh . | cut -f1)"

# Docker setup
docker-build: ## Build Docker image
	@docker build -t paws-whiskers-petstore .

docker-run: docker-build ## Build and run Docker container
	@docker run -d -p 8080:80 --name paws-whiskers paws-whiskers-petstore
	@echo "🎉 Pet store running at http://localhost:8080"

docker-stop: ## Stop Docker container
	@docker stop paws-whiskers 2>/dev/null || true
	@docker rm paws-whiskers 2>/dev/null || true
	@echo "🛑 Docker container stopped"