function beggars(values, n) {
  const sum = [...Array(n)].fill(0);
  return values.reduce((acc, curr, i) => {
    acc[i % acc.length] += curr;
    return acc;
  }, sum);
}
console.log(beggars([1, 2, 3, 4, 5], 2));
