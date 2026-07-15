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
function normalise(str) {
  str.
}

function caesarCipher(str) {
  return str;
}

module.exports = { add, capitalize, reverse, calculator, caesarCipher };
