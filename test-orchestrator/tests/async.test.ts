import { expect, test, describe } from "bun:test";

describe("Async operations", () => {
  test("promise resolution", async () => {
    const promise = Promise.resolve(42);
    await expect(promise).resolves.toBe(42);
  });

  test("timeout simulation", async () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    
    const start = Date.now();
    await delay(100);
    const end = Date.now();
    
    expect(end - start).toBeGreaterThanOrEqual(90);
  });

  test("async function", async () => {
    const asyncAdd = async (a: number, b: number): Promise<number> => {
      await new Promise(resolve => setTimeout(resolve, 10));
      return a + b;
    };

    const result = await asyncAdd(5, 3);
    expect(result).toBe(8);
  });
});