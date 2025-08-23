.PHONY: install dev start test build clean help

# Default target
.DEFAULT_GOAL := help

install: ## Install dependencies
	@echo "📦 Installing dependencies with Bun..."
	bun install

dev: ## Run orchestrator in development mode with watch
	@echo "🔧 Starting in development mode..."
	bun run dev

start: ## Run the test orchestrator
	@echo "🚀 Starting test orchestrator..."
	bun run start

test: ## Run tests using the orchestrator
	@echo "🧪 Running tests with orchestrator..."
	bun run start

test-parallel: ## Run tests in parallel mode
	@echo "⚡ Running tests in parallel..."
	bun run start --max-workers 4

test-sequential: ## Run tests sequentially
	@echo "🔄 Running tests sequentially..."
	bun run start --no-parallel

test-timeout: ## Run tests with custom timeout
	@echo "⏱️  Running tests with 10s timeout..."
	bun run start --timeout 10000

build: ## Build the project
	@echo "🏗️  Building project..."
	bun run build

clean: ## Clean build artifacts and node_modules
	@echo "🧹 Cleaning project..."
	rm -rf dist node_modules bun.lockb

lint: ## Run linter (placeholder)
	@echo "🔍 Linting code..."
	bun run lint

check-bun: ## Check if Bun is installed
	@echo "🔍 Checking Bun installation..."
	@which bun > /dev/null || (echo "❌ Bun is not installed. Please install Bun first." && exit 1)
	@bun --version

demo: ## Run a complete demo of the orchestrator
	@echo "🎯 Running complete demo..."
	@which bun > /dev/null && (make check-bun && make install && make test) || (echo "📝 Bun not installed, running Node.js demo instead..." && node test-demo.js)

demo-full: ## Run a complete demo with Bun (requires Bun installation)
	@echo "🎯 Running complete demo with Bun..."
	@make check-bun
	@make install
	@echo "\n📋 Running all tests..."
	@make test
	@echo "\n⚡ Running tests in parallel..."
	@make test-parallel
	@echo "\n🔄 Running tests sequentially..."
	@make test-sequential

help: ## Show this help message
	@echo "Test Orchestrator with Bun Runtime"
	@echo "=================================="
	@echo ""
	@echo "Available targets:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo ""
	@echo "Usage examples:"
	@echo "  make install    # Install dependencies"
	@echo "  make demo       # Run complete demonstration"
	@echo "  make test       # Run all tests"
	@echo "  make dev        # Start in development mode"