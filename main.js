function getDecimal(n) {
    return Math.abs(n - Math.trunc(n))
  }
console.log(getDecimal(4.5));
