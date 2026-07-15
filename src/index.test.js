// index.test.js
const {
  add,
  capitalize,
  reverse,
  calculator,
  caesarCipher,
} = require("./index");

describe("add", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("capitalize", () => {
  test("capitalizes the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});

describe("reverse", () => {
  test("reverse the string", () => {
    expect(reverse("hello")).toBe("olleh");
  });
});

describe("calculator", () => {
  test("add two numbers to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("subtract two numbers to equal 1", () => {
    expect(calculator.subtract(4, 3)).toBe(1);
  });
  test("divide two numbers to equal 5", () => {
    expect(calculator.divide(25, 5)).toBe(5);
  });
  test("multiply two numbers to equal 25", () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });
});

describe("caesarCipher", () => {
  test("wrapping test from z to a, abc should equal xyz", () => {
    expect(caesarCipher("abc", 3)).toBe("xyz");
  });
  test("case preservation - 'HeLLo' to equal 'KhOOr'", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("test punctuation - 'Hello, World!'", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
