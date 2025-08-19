function task1() {
    return Math.floor(Math.random() * 100) + 1;
}

function task2() {
    return Math.floor(Math.random() * 100) + 1;
}

function task3() {
    return Math.floor(Math.random() * 100) + 1;
}

function task4() {
    return Math.floor(Math.random() * 100) + 1;
}

function task5() {
    return Math.floor(Math.random() * 100) + 1;
}

function main() {
    const result1 = task1();
    const result2 = task2();
    const result3 = task3();
    const result4 = task4();
    const result5 = task5();
    
    console.log(`Task 1: ${result1}`);
    console.log(`Task 2: ${result2}`);
    console.log(`Task 3: ${result3}`);
    console.log(`Task 4: ${result4}`);
    console.log(`Task 5: ${result5}`);
    
    const total = result1 + result2 + result3 + result4 + result5;
    console.log(`\nSum of all tasks: ${total}`);
    
    return total;
}

main();