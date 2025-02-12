// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  if (n === 0 || n === 1) return 1;

  let fact = 1;
  while (n > 1) {
    fact *= n;
    n--;
  }
  return fact;
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  if (!Array.isArray(arr) || arr.some(num => typeof num !== "number")) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  const vowels = "aeiouAEIOU";
  return [...str].filter(char => vowels.includes(char)).length;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (typeof n !== "number" || !Number.isInteger(n) || n < 2) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};