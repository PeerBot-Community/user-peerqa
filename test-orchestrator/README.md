# Test Orchestrator with Bun Runtime

A powerful test orchestrator built specifically for the Bun JavaScript runtime, providing parallel test execution, test discovery, and comprehensive reporting.

## Features

- 🚀 **Bun Native**: Built specifically for Bun runtime
- ⚡ **Parallel Execution**: Run tests concurrently for faster results
- 🔍 **Auto Discovery**: Automatically finds test files based on patterns
- 📊 **Rich Reporting**: Detailed test results and timing information
- 🎯 **Configurable**: Customize timeout, workers, and test patterns
- 🛠️ **CLI Interface**: Easy command-line usage with helpful options

## Quick Start

1. **Install Bun** (if not already installed):
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Install dependencies**:
   ```bash
   make install
   # or
   bun install
   ```

3. **Run the demo**:
   ```bash
   make demo
   ```

## Usage

### Basic Usage

```bash
# Run all tests
make test
# or
bun run start
```

### Advanced Options

```bash
# Run tests in parallel (default)
bun run start --max-workers 4

# Run tests sequentially
bun run start --no-parallel

# Custom test directory
bun run start --test-dir ./my-tests

# Custom timeout (in milliseconds)
bun run start --timeout 10000
```

### Makefile Commands

- `make install` - Install dependencies
- `make test` - Run all tests
- `make test-parallel` - Run tests in parallel mode
- `make test-sequential` - Run tests sequentially
- `make dev` - Start in development mode with watch
- `make build` - Build the project
- `make demo` - Run complete demonstration
- `make help` - Show all available commands

## Test File Structure

The orchestrator automatically discovers test files matching the pattern `*.(test|spec).(ts|js|mjs)` in the `tests/` directory.

Example test file (`tests/example.test.ts`):

```typescript
import { expect, test, describe } from "bun:test";

describe("Example tests", () => {
  test("basic assertion", () => {
    expect(1 + 1).toBe(2);
  });

  test("async test", async () => {
    const result = await Promise.resolve(42);
    expect(result).toBe(42);
  });
});
```

## Configuration

The orchestrator can be configured through command-line arguments:

| Option | Description | Default |
|--------|-------------|---------|
| `--test-dir` | Test directory path | `./tests` |
| `--timeout` | Test timeout in milliseconds | `30000` |
| `--no-parallel` | Run tests sequentially | `false` |
| `--max-workers` | Maximum parallel workers | `4` |

## Architecture

The test orchestrator consists of several key components:

- **Test Discovery**: Recursively scans directories for test files
- **Execution Engine**: Handles parallel/sequential test execution
- **Process Management**: Spawns Bun test processes for each file
- **Result Aggregation**: Collects and reports test results
- **CLI Interface**: Provides command-line interaction

## Development

```bash
# Install dependencies
make install

# Start development mode with file watching
make dev

# Build the project
make build

# Clean build artifacts
make clean
```

## Example Output

```
🚀 Test Orchestrator starting with Bun runtime...
📁 Test directory: ./tests
🔍 Pattern: \.(test|spec)\.(ts|js|mjs)$
⚡ Parallel: true
📋 Found 4 test files
🧪 Running: ./tests/math.test.ts
🧪 Running: ./tests/async.test.ts
🧪 Running: ./tests/string.test.ts
🧪 Running: ./tests/failing.test.ts
✅ ./tests/math.test.ts (45ms)
✅ ./tests/async.test.ts (120ms)
✅ ./tests/string.test.ts (32ms)
❌ ./tests/failing.test.ts (28ms)

📊 Test Summary:
   Total: 4
   ✅ Passed: 3
   ❌ Failed: 1
   ⏱️  Total time: 225ms

💥 Failed tests:
   - ./tests/failing.test.ts

💔 Some tests failed.
```

## License

MIT