// index.test.js
const { analyzeArray } = require("./analyzeArray");

describe("analyzeArray", () => {
  test("returns the correct average, min, max, and length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("handles an array with a single number", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("handles negative numbers", () => {
    expect(analyzeArray([-3, -1, -2])).toEqual({
      average: -2,
      min: -3,
      max: -1,
      length: 3,
    });
  });
});
