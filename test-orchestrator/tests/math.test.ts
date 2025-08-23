import { expect, test, describe } from "bun:test";

describe("Math operations", () => {
  test("addition", () => {
    expect(2 + 2).toBe(4);
    expect(10 + 5).toBe(15);
  });

  test("subtraction", () => {
    expect(10 - 5).toBe(5);
    expect(0 - 5).toBe(-5);
  });

  test("multiplication", () => {
    expect(3 * 4).toBe(12);
    expect(7 * 0).toBe(0);
  });

  test("division", () => {
    expect(10 / 2).toBe(5);
    expect(15 / 3).toBe(5);
  });
});