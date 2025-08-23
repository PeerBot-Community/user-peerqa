import { expect, test, describe } from "bun:test";

describe("String operations", () => {
  test("string concatenation", () => {
    expect("Hello" + " " + "World").toBe("Hello World");
  });

  test("string length", () => {
    expect("Bun".length).toBe(3);
    expect("".length).toBe(0);
  });

  test("string methods", () => {
    const str = "Test Orchestrator";
    
    expect(str.toUpperCase()).toBe("TEST ORCHESTRATOR");
    expect(str.toLowerCase()).toBe("test orchestrator");
    expect(str.includes("Orchestra")).toBe(true);
    expect(str.startsWith("Test")).toBe(true);
    expect(str.endsWith("tor")).toBe(true);
  });

  test("string splitting", () => {
    const str = "apple,banana,orange";
    const fruits = str.split(",");
    
    expect(fruits).toEqual(["apple", "banana", "orange"]);
    expect(fruits.length).toBe(3);
  });
});