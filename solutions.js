// Sum of Two Numbers
function sum(a, b) {
  let total=a+b;
  return total;
}

// Factorial of a Number
function factorial(n) {
  if (n < 0) return "El factorial no está definido para números negativos.";
  let total = 1;
  for (let i = 2; i <= n; i++) {
    total *= i;
  }
  return total;
}

// Find the Largest Number
function findLargest(arr) {
  if (arr.length === 0) return "El arreglo está vacío.";
  const mayor = Math.max(...arr); 
  return mayor;
}

// Count Vowels in a String
function countVowels(str) {
  const vocales = 'aeiouAEIOU';
    let cantidad=0;
    for(let i=0;i<str.length;i++){
      if(vocales.indexOf(str[i])!=-1){
        cantidad++;
    }
  }
  return cantidad;
}

// Check if a Number is Prime
function isPrime(n) {
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

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
