const add = require("./index");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

//A capitalize function that takes a string and returns it with the first character capitalized.
test("checks if the first letter on teh string is a capital letter", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(add(1, 2)).toBe(3);
    });

    test("capitalizes the first letter of a string", () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    test("handles single character string", () => {
        expect(capitalize("a")).toBe("A");
    });

    test("handles string already capitalized", () => {
        expect(capitalize("Hello")).toBe("Hello");
    });

    test("handles empty string", () => {
        expect(capitalize("")).toBe("");
    });

    test("capitalizes with special characters", () => {
        expect(capitalize("hello world")).toBe("Hello world");
    });
})