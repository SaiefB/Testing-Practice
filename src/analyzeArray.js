// index.js
import "./styles.css";

// An analyzeArray function that takes an array of numbers and returns an
// object with the average, min, max, and length of that array.
function analyzeArray(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);

  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = { analyzeArray };
