// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Ambos argumentos deben ser números.";
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    return "El argumento debe ser un número entero.";
  }
  if (n < 0) {
    return "El factorial no está definido para números negativos.";
  }
  
  let total = 1;
  for (let i = 2; i <= n; i++) {
    total *= i;
  }
  return total;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr)) {
    return "El argumento debe ser un arreglo de números.";
  }
  if (arr.length === 0) {
    return "El arreglo está vacío.";
  }
  if (!arr.every(num => typeof num === 'number')) {
    return "El arreglo debe contener solo números.";
  }
  
  const mayor = Math.max(...arr); 
  return mayor;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    return "El argumento debe ser una cadena de texto.";
  }
  
  const vocales = 'aeiouAEIOU';
  let cantidad = 0;
  for (let i = 0; i < str.length; i++) {
    if (vocales.indexOf(str[i]) !== -1) {
      cantidad++;
    }
  }
  return cantidad;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    return "El argumento debe ser un número entero.";
  }
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Exportar las funciones para su uso en otros archivos
module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
