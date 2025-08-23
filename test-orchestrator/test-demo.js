#!/usr/bin/env node

// Demo script to showcase the test orchestrator functionality
// This simulates what the Bun orchestrator would do

import fs from 'fs';
import path from 'path';

console.log('🚀 Test Orchestrator Demo (simulated with Node.js)');
console.log('📁 Test directory: ./tests');
console.log('🔍 Pattern: \\.(test|spec)\\.(ts|js|mjs)$');
console.log('⚡ Parallel: true');

// Discover test files
const testDir = './tests';
const testFiles = [];

if (fs.existsSync(testDir)) {
  const entries = fs.readdirSync(testDir);
  entries.forEach(entry => {
    if (/\.(test|spec)\.(ts|js|mjs)$/.test(entry)) {
      testFiles.push(path.join(testDir, entry));
    }
  });
}

console.log(`📋 Found ${testFiles.length} test files`);

// Simulate test execution
const results = [];
const startTime = Date.now();

testFiles.forEach((file, index) => {
  console.log(`🧪 Running: ${file}`);
  
  // Simulate test execution time
  const duration = Math.random() * 100 + 20; // 20-120ms
  
  // Simulate some tests passing and some failing
  const passed = !file.includes('failing');
  
  results.push({
    file,
    passed,
    duration: Math.round(duration),
    error: !passed ? 'Test assertion failed' : undefined
  });
  
  if (passed) {
    console.log(`✅ ${file} (${Math.round(duration)}ms)`);
  } else {
    console.log(`❌ ${file} (${Math.round(duration)}ms)`);
  }
});

const totalTime = Date.now() - startTime;
const passed = results.filter(r => r.passed).length;
const failed = results.filter(r => !r.passed).length;

console.log('\n📊 Test Summary:');
console.log(`   Total: ${results.length}`);
console.log(`   ✅ Passed: ${passed}`);
console.log(`   ❌ Failed: ${failed}`);
console.log(`   ⏱️  Total time: ${totalTime}ms`);

if (failed > 0) {
  console.log('\n💥 Failed tests:');
  results
    .filter(r => !r.passed)
    .forEach(r => {
      console.log(`   - ${r.file}${r.error ? `: ${r.error}` : ''}`);
    });
}

console.log(failed === 0 ? '\n🎉 All tests passed!' : '\n💔 Some tests failed.');

console.log('\n📝 Note: This is a demo simulation. With Bun installed, you would run:');
console.log('   bun run start');
console.log('   or');
console.log('   make test');