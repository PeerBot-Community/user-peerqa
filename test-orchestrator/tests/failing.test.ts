import { expect, test, describe } from "bun:test";

describe("Intentionally failing tests", () => {
  test("this will fail", () => {
    expect(1 + 1).toBe(3); // This should fail
  });

  test("another failure", () => {
    expect("hello").toBe("world"); // This should also fail
  });
});