# Testing Practice

Write tests for the following, then make the tests pass. Note: Jest requires Babel configuration for ESM/CJS conversion.

## 1. Capitalize Function
Takes a string and returns it with the first character capitalized.

## 2. Reverse String Function
Takes a string and returns it reversed.

## 3. Calculator Object
Contains functions for basic operations: `add`, `subtract`, `divide`, and `multiply`. Each takes two numbers and returns the correct calculation.

## 4. Caesar Cipher Function
Takes a string and a shift factor, returning each character "shifted". [Learn about Caesar ciphers](https://en.wikipedia.org/wiki/Caesar_cipher).

- **Test wrapping**: `caesarCipher('xyz', 3)` → `'abc'`
- **Test case preservation**: `caesarCipher('HeLLo', 3)` → `'KhOOr'`
- **Test punctuation**: `caesarCipher('Hello, World!', 3)` → `'Khoor, Zruog!'`

*Tip: Split the function into smaller helper functions, but only test the public `caesarCipher` function.*

## 5. Analyze Array Function
Takes an array of numbers and returns an object with: `average`, `min`, `max`, and `length`.

```javascript
const object = analyzeArray([1, 8, 3, 4, 2, 6]);

object == {
    average: 4,
    min: 1,
    max: 8,
    length: 6
};
```