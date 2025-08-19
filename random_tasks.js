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

const randomNumbers = [
    task1(),
    task2(),
    task3(),
    task4(),
    task5()
];

const sum = randomNumbers.reduce((total, num) => total + num, 0);

console.log('Random numbers:', randomNumbers);
console.log('Sum:', sum);

module.exports = { task1, task2, task3, task4, task5, randomNumbers, sum };