#!/usr/bin/env node

function task1() {
    // Task 1: Returns a random integer between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
}

function task2() {
    // Task 2: Returns a random float between 0 and 50
    return Math.random() * 50;
}

function task3() {
    // Task 3: Returns a random integer between 10 and 200
    return Math.floor(Math.random() * 191) + 10;
}

function task4() {
    // Task 4: Returns a random float between -25 and 25
    return (Math.random() * 50) - 25;
}

function task5() {
    // Task 5: Returns a random integer between 5 and 75
    return Math.floor(Math.random() * 71) + 5;
}

function main() {
    console.log("Executing 5 random number tasks...\n");
    
    // Execute each task
    const result1 = task1();
    const result2 = task2();
    const result3 = task3();
    const result4 = task4();
    const result5 = task5();
    
    // Display individual results
    console.log(`Task 1 result: ${result1}`);
    console.log(`Task 2 result: ${result2.toFixed(2)}`);
    console.log(`Task 3 result: ${result3}`);
    console.log(`Task 4 result: ${result4.toFixed(2)}`);
    console.log(`Task 5 result: ${result5}`);
    
    // Calculate and display sum
    const totalSum = result1 + result2 + result3 + result4 + result5;
    console.log(`\nSum of all tasks: ${totalSum.toFixed(2)}`);
    
    return totalSum;
}

// Run the main function
if (require.main === module) {
    main();
}