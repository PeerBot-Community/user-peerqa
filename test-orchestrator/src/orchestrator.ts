#!/usr/bin/env bun

import { existsSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { spawn } from 'child_process';

interface TestResult {
  file: string;
  passed: boolean;
  duration: number;
  error?: string;
}

interface OrchestratorConfig {
  testDir: string;
  pattern: RegExp;
  timeout: number;
  parallel: boolean;
  maxWorkers: number;
}

class TestOrchestrator {
  private config: OrchestratorConfig;
  private results: TestResult[] = [];

  constructor(config: Partial<OrchestratorConfig> = {}) {
    this.config = {
      testDir: config.testDir || './tests',
      pattern: config.pattern || /\.(test|spec)\.(ts|js|mjs)$/,
      timeout: config.timeout || 30000,
      parallel: config.parallel ?? true,
      maxWorkers: config.maxWorkers || 4,
      ...config
    };
  }

  async run(): Promise<void> {
    console.log('🚀 Test Orchestrator starting with Bun runtime...');
    console.log(`📁 Test directory: ${this.config.testDir}`);
    console.log(`🔍 Pattern: ${this.config.pattern.source}`);
    console.log(`⚡ Parallel: ${this.config.parallel}`);
    
    const testFiles = this.discoverTests();
    
    if (testFiles.length === 0) {
      console.log('⚠️  No test files found');
      return;
    }

    console.log(`📋 Found ${testFiles.length} test files`);
    
    const startTime = Date.now();
    
    if (this.config.parallel) {
      await this.runTestsInParallel(testFiles);
    } else {
      await this.runTestsSequentially(testFiles);
    }
    
    const totalTime = Date.now() - startTime;
    this.printSummary(totalTime);
  }

  private discoverTests(): string[] {
    const testFiles: string[] = [];
    
    if (!existsSync(this.config.testDir)) {
      console.error(`❌ Test directory not found: ${this.config.testDir}`);
      return testFiles;
    }
    
    const scanDirectory = (dir: string): void => {
      const entries = readdirSync(dir);
      
      for (const entry of entries) {
        const fullPath = join(dir, entry);
        const stat = statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (this.config.pattern.test(entry)) {
          testFiles.push(fullPath);
        }
      }
    };
    
    scanDirectory(this.config.testDir);
    return testFiles;
  }

  private async runTestsInParallel(testFiles: string[]): Promise<void> {
    const chunks = this.chunkArray(testFiles, this.config.maxWorkers);
    
    for (const chunk of chunks) {
      const promises = chunk.map(file => this.runSingleTest(file));
      await Promise.all(promises);
    }
  }

  private async runTestsSequentially(testFiles: string[]): Promise<void> {
    for (const file of testFiles) {
      await this.runSingleTest(file);
    }
  }

  private async runSingleTest(file: string): Promise<void> {
    console.log(`🧪 Running: ${file}`);
    const startTime = Date.now();
    
    try {
      const result = await this.executeTest(file);
      const duration = Date.now() - startTime;
      
      this.results.push({
        file,
        passed: result,
        duration
      });
      
      if (result) {
        console.log(`✅ ${file} (${duration}ms)`);
      } else {
        console.log(`❌ ${file} (${duration}ms)`);
      }
    } catch (error) {
      const duration = Date.now() - startTime;
      const errorMessage = error instanceof Error ? error.message : String(error);
      
      this.results.push({
        file,
        passed: false,
        duration,
        error: errorMessage
      });
      
      console.log(`💥 ${file} - Error: ${errorMessage} (${duration}ms)`);
    }
  }

  private async executeTest(file: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const process = spawn('bun', ['test', file], {
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: this.config.timeout
      });
      
      let stdout = '';
      let stderr = '';
      
      process.stdout?.on('data', (data) => {
        stdout += data.toString();
      });
      
      process.stderr?.on('data', (data) => {
        stderr += data.toString();
      });
      
      process.on('close', (code) => {
        if (code === 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
      
      process.on('error', (error) => {
        reject(error);
      });
      
      // Handle timeout
      setTimeout(() => {
        if (!process.killed) {
          process.kill('SIGKILL');
          reject(new Error('Test timeout'));
        }
      }, this.config.timeout);
    });
  }

  private chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  private printSummary(totalTime: number): void {
    const passed = this.results.filter(r => r.passed).length;
    const failed = this.results.filter(r => !r.passed).length;
    const total = this.results.length;
    
    console.log('\n📊 Test Summary:');
    console.log(`   Total: ${total}`);
    console.log(`   ✅ Passed: ${passed}`);
    console.log(`   ❌ Failed: ${failed}`);
    console.log(`   ⏱️  Total time: ${totalTime}ms`);
    
    if (failed > 0) {
      console.log('\n💥 Failed tests:');
      this.results
        .filter(r => !r.passed)
        .forEach(r => {
          console.log(`   - ${r.file}${r.error ? `: ${r.error}` : ''}`);
        });
    }
    
    console.log(failed === 0 ? '\n🎉 All tests passed!' : '\n💔 Some tests failed.');
    process.exit(failed === 0 ? 0 : 1);
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  const config: Partial<OrchestratorConfig> = {};
  
  // Parse command line arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--test-dir':
        config.testDir = args[++i];
        break;
      case '--timeout':
        config.timeout = parseInt(args[++i], 10);
        break;
      case '--no-parallel':
        config.parallel = false;
        break;
      case '--max-workers':
        config.maxWorkers = parseInt(args[++i], 10);
        break;
      case '--help':
        console.log(`
Test Orchestrator with Bun Runtime

Usage: bun run src/orchestrator.ts [options]

Options:
  --test-dir <path>     Test directory (default: ./tests)
  --timeout <ms>        Test timeout in milliseconds (default: 30000)
  --no-parallel        Run tests sequentially
  --max-workers <num>   Maximum parallel workers (default: 4)
  --help               Show this help message
        `);
        process.exit(0);
        break;
    }
  }
  
  const orchestrator = new TestOrchestrator(config);
  await orchestrator.run();
}

if (import.meta.main) {
  main().catch(console.error);
}

export { TestOrchestrator };