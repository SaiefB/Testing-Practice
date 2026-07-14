//index.test.js
const sum = require("./index");

test("adds 1 + 2 to equal three", () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + "hello" to return undefined', () => {
  expect(sum(1, "hello")).toBeUndefined();
});
