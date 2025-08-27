// Simple test for username system
function testUsername() {
  const name = "John Doe";
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
  return greeting === "Hello, John Doe!";
}

console.log("Running username test...");
const testResult = testUsername();
console.log(`Test ${testResult ? "passed" : "failed"}`);