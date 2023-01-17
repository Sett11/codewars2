function solve(z) {
  const notPrimes = (n) => {
    if (n === 1) {
      return true
    }
    if (n === 2 || n === 3) {
      return false
    }
    const num = String(n).split``.map(Number);
    if (num.includes(2) ||
      num.includes(3) ||
      num.includes(5) ||
      num.includes(7)) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return true;
      }
    }
    return false;
  }
  const arr = [];
    let counter = 1;
    while (arr.length <= z) {
      if (notPrimes(counter)) {
        arr.push(counter);
      }
      counter++;
    }
    return arr[z]
  }
  console.log(solve(10))