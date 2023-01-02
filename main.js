function ArithmeticSequenceSum(a, r, n) {
  const arr = [a];
  while (arr.length < n) {
    arr.push(arr.reduce((acc, curr) => acc + r, a));
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(ArithmeticSequenceSum(2, 2, 10));
