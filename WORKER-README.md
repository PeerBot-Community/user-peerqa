# Test Worker - Standalone Implementation

This is a standalone test worker that operates independently without configmap communication.

## Features

- **Self-contained**: No external configuration dependencies
- **Task Processing**: Generates and processes test tasks automatically
- **Status Monitoring**: Real-time status reporting every 5 seconds
- **Graceful Shutdown**: Handles SIGINT and SIGTERM signals
- **Error Handling**: Robust error handling for task processing

## Usage

### Run the worker directly:
```bash
node test-worker.js
```

### Or use the package.json script:
```bash
npm --prefix . -c worker-package.json start
```

## Worker Behavior

1. **Startup**: Creates a unique worker ID and generates 10 test tasks
2. **Processing**: Processes tasks sequentially with random delays (0.5-1.5s)
3. **Monitoring**: Reports status every 5 seconds including:
   - Worker ID
   - Running status
   - Remaining tasks count
   - Processed tasks count
   - Uptime
4. **Shutdown**: Automatically stops when all tasks are completed

## Sample Output

```
🚀 Starting TestWorker worker-1755915404070
📝 Generated 10 test tasks
🔄 Processing task task-1: Sample data for task 1
✅ Completed task task-1
📊 Task result: { taskId: 'task-1', status: 'completed', ... }
📈 Worker Status: { workerId: '...', isRunning: true, ... }
🎉 All tasks completed! Processed 10 tasks
⏹️  Stopping TestWorker worker-1755915404070
```

## Configuration

The worker is designed to work without external configuration. All settings are hardcoded:

- **Task Count**: 10 tasks
- **Processing Delay**: 500-1500ms random
- **Status Interval**: 5 seconds
- **Task Priority**: Random 1-3

## Extending

To modify the worker behavior, edit the following methods in `test-worker.js`:

- `generateTestTasks()`: Change task generation logic
- `processTask()`: Modify task processing behavior
- `processLoop()`: Alter the main processing flow