function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function sumOfAllPrimes(n) {
  let sum = 0;
  for (let num = 2; num <= n; num++) {
    if (isPrime(num)) {
      sum += num;
    }
  }
  return sum;
}
console.log(sumOfAllPrimes(10));
console.log(sumOfAllPrimes(59));
