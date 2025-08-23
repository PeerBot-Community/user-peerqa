#!/usr/bin/env node

/**
 * Test Worker - Standalone worker without configmap communication
 * This worker demonstrates basic functionality without external configuration
 */

class TestWorker {
    constructor() {
        this.workerId = `worker-${Date.now()}`;
        this.isRunning = false;
        this.tasks = [];
        this.processedCount = 0;
    }

    start() {
        console.log(`🚀 Starting TestWorker ${this.workerId}`);
        this.isRunning = true;
        this.generateTestTasks();
        this.processLoop();
    }

    stop() {
        console.log(`⏹️  Stopping TestWorker ${this.workerId}`);
        this.isRunning = false;
    }

    generateTestTasks() {
        // Generate some sample tasks to process
        for (let i = 1; i <= 10; i++) {
            this.tasks.push({
                id: `task-${i}`,
                data: `Sample data for task ${i}`,
                priority: Math.floor(Math.random() * 3) + 1,
                timestamp: new Date().toISOString()
            });
        }
        console.log(`📝 Generated ${this.tasks.length} test tasks`);
    }

    async processTask(task) {
        console.log(`🔄 Processing task ${task.id}: ${task.data}`);
        
        // Simulate some work
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
        
        console.log(`✅ Completed task ${task.id}`);
        this.processedCount++;
        
        return {
            taskId: task.id,
            status: 'completed',
            processedAt: new Date().toISOString(),
            workerId: this.workerId
        };
    }

    async processLoop() {
        while (this.isRunning && this.tasks.length > 0) {
            const task = this.tasks.shift();
            if (task) {
                try {
                    const result = await this.processTask(task);
                    console.log(`📊 Task result:`, result);
                } catch (error) {
                    console.error(`❌ Error processing task ${task.id}:`, error.message);
                }
            }
        }

        if (this.tasks.length === 0) {
            console.log(`🎉 All tasks completed! Processed ${this.processedCount} tasks`);
            this.stop();
        }
    }

    getStatus() {
        return {
            workerId: this.workerId,
            isRunning: this.isRunning,
            remainingTasks: this.tasks.length,
            processedCount: this.processedCount,
            uptime: process.uptime()
        };
    }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    if (worker) {
        worker.stop();
    }
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    if (worker) {
        worker.stop();
    }
    process.exit(0);
});

// Start the worker
const worker = new TestWorker();

// Log status every 5 seconds
const statusInterval = setInterval(() => {
    const status = worker.getStatus();
    console.log(`📈 Worker Status:`, status);
    
    if (!status.isRunning) {
        clearInterval(statusInterval);
    }
}, 5000);

worker.start();