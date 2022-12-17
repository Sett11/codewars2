function maxMultiple(divisor, bound) {
  let res = null;
  for (let i = 1; i <= bound; i++) {
    if (i % divisor === 0) {
      res = i
    }
  }
  return res
}
console.log(maxMultiple(2, 7));
