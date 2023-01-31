function isPrime(n) {
  if (n < 2 || n === 4||n===9) return false;
  if (n === 2) return true;
  for (let i = 2; i < Math.sqrt(n)+1; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
