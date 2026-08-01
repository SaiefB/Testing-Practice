// index.js
import "./styles.css";

// function to add two numbers
function add(a, b) {
  return a + b;
}

// function to capitalize the first letter in a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// function reverse a string
function reverse(str) {
  let splitStr = str.split("");
  let reversedStr = splitStr.reverse();
  let joinedStr = reversedStr.join("");
  return joinedStr;
}

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted"
//https://www.aleksandrhovhannisyan.com/blog/caesar-cipher/

// function to normalise string i.e make string lowercase
function caesarCipher(str, key) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let lowerChar = char.toLowerCase();
    let index = alphabet.indexOf(lowerChar);

    if (index === -1) {
      // not a letter — leave it untouched
      result += char;
    } else {
      let shiftedChar = alphabet[(index + key) % 26];
      // match the original character's case
      result += char === lowerChar ? shiftedChar : shiftedChar.toUpperCase();
    }
  }

  return result;
}

module.exports = { add, capitalize, reverse, calculator, caesarCipher };
