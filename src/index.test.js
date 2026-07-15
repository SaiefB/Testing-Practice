// index.test.js
const { add, capitalize, reverse } = require("./index");

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
