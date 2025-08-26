// Sequential processing example
async function processItems(items) {
    const results = [];
    
    for (const item of items) {
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const result = `Processed ${item}`;
        results.push(result);
        console.log(result); 
    }
    
    return results;
}

// Test the sequential processing
const items = ['A', 'B', 'C'];
console.log('Starting sequential processing...');

processItems(items).then(results => {
    console.log('All items processed:', results);
});