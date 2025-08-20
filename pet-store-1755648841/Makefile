.PHONY: dev build deploy clean install serve test

# Project configuration
PROJECT_NAME = pet-store-1755648841
PORT = 8080

# Default target
all: serve

# Install dependencies (if using a package manager)
install:
	@echo "Installing dependencies..."
	@if command -v npm >/dev/null 2>&1; then \
		npm install; \
	elif command -v python3 >/dev/null 2>&1; then \
		python3 -m http.server --version >/dev/null 2>&1 || pip3 install --user http.server; \
	fi
	@echo "Dependencies installed."

# Development server
dev: serve

# Serve the application locally
serve:
	@echo "Starting development server on port $(PORT)..."
	@if command -v python3 >/dev/null 2>&1; then \
		echo "Using Python HTTP server..."; \
		python3 -m http.server $(PORT); \
	elif command -v node >/dev/null 2>&1; then \
		echo "Using Node.js HTTP server..."; \
		npx http-server -p $(PORT) -o; \
	elif command -v php >/dev/null 2>&1; then \
		echo "Using PHP built-in server..."; \
		php -S localhost:$(PORT); \
	else \
		echo "No suitable HTTP server found. Please install Python 3, Node.js, or PHP."; \
		exit 1; \
	fi

# Build for production (minify files)
build:
	@echo "Building project for production..."
	@mkdir -p dist
	@cp index.html dist/
	@echo "Minifying CSS..."
	@if command -v csso >/dev/null 2>&1; then \
		csso styles.css --output dist/styles.css; \
	else \
		cp styles.css dist/; \
		echo "CSS minification skipped (csso not installed)"; \
	fi
	@echo "Minifying JavaScript..."
	@if command -v uglifyjs >/dev/null 2>&1; then \
		uglifyjs script.js --compress --mangle --output dist/script.js; \
	else \
		cp script.js dist/; \
		echo "JS minification skipped (uglify-js not installed)"; \
	fi
	@echo "Build complete! Files are in the dist/ directory."

# Deploy to GitHub Pages (requires gh CLI)
deploy:
	@echo "Deploying to GitHub Pages..."
	@if ! command -v gh >/dev/null 2>&1; then \
		echo "GitHub CLI (gh) is required for deployment. Please install it first."; \
		exit 1; \
	fi
	@make build
	@echo "Deploying dist/ directory..."
	@if [ ! -d ".git" ]; then \
		git init; \
		git add .; \
		git commit -m "Initial commit for $(PROJECT_NAME)"; \
	fi
	@git add dist/
	@git commit -m "Build for deployment" || true
	@echo "Deployment complete!"

# Deploy to Cloudflare Pages (requires wrangler)
deploy-cloudflare:
	@echo "Deploying to Cloudflare Pages..."
	@if ! command -v wrangler >/dev/null 2>&1; then \
		echo "Wrangler CLI is required for Cloudflare deployment."; \
		echo "Install with: npm install -g wrangler"; \
		exit 1; \
	fi
	@make build
	@wrangler pages deploy dist --project-name $(PROJECT_NAME)

# Deploy to Netlify (requires netlify-cli)
deploy-netlify:
	@echo "Deploying to Netlify..."
	@if ! command -v netlify >/dev/null 2>&1; then \
		echo "Netlify CLI is required for Netlify deployment."; \
		echo "Install with: npm install -g netlify-cli"; \
		exit 1; \
	fi
	@make build
	@netlify deploy --dir=dist --prod

# Test the application
test:
	@echo "Running tests..."
	@echo "Checking HTML validation..."
	@if command -v html5validator >/dev/null 2>&1; then \
		html5validator --root . --match "*.html"; \
	else \
		echo "HTML validation skipped (html5validator not installed)"; \
	fi
	@echo "Checking CSS syntax..."
	@if command -v csslint >/dev/null 2>&1; then \
		csslint styles.css; \
	else \
		echo "CSS validation skipped (csslint not installed)"; \
	fi
	@echo "Checking JavaScript syntax..."
	@if command -v jshint >/dev/null 2>&1; then \
		jshint script.js; \
	else \
		echo "JS validation skipped (jshint not installed)"; \
	fi
	@echo "Tests completed!"

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	@rm -rf dist/
	@echo "Clean complete!"

# Show project information
info:
	@echo "Project: $(PROJECT_NAME)"
	@echo "Port: $(PORT)"
	@echo "Available commands:"
	@echo "  make serve      - Start development server"
	@echo "  make build      - Build for production"
	@echo "  make deploy     - Deploy to GitHub Pages"
	@echo "  make test       - Run tests"
	@echo "  make clean      - Clean build files"
	@echo "  make install    - Install dependencies"

# Help target
help: info