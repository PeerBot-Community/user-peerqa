#!/usr/bin/env node

function generateRandomNumber(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function task1() {
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate work
    const number = generateRandomNumber();
    console.log(`Task 1 generated: ${number}`);
    return number;
}

async function task2() {
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate work
    const number = generateRandomNumber();
    console.log(`Task 2 generated: ${number}`);
    return number;
}

async function task3() {
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate work
    const number = generateRandomNumber();
    console.log(`Task 3 generated: ${number}`);
    return number;
}

async function task4() {
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate work
    const number = generateRandomNumber();
    console.log(`Task 4 generated: ${number}`);
    return number;
}

async function task5() {
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate work
    const number = generateRandomNumber();
    console.log(`Task 5 generated: ${number}`);
    return number;
}

async function main() {
    console.log("Starting 5 random number generation tasks...");
    
    // Execute all tasks concurrently
    const promises = [task1(), task2(), task3(), task4(), task5()];
    
    try {
        const results = await Promise.all(promises);
        
        console.log(`\nAll generated numbers: [${results.join(', ')}]`);
        
        // Sum all the numbers
        const total = results.reduce((sum, num) => sum + num, 0);
        console.log(`Sum of all numbers: ${total}`);
        
        return total;
    } catch (error) {
        console.error('Error executing tasks:', error);
    }
}

// Run the main function
main();