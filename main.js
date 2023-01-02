function howManyGifts(m, g) {
  if (m === 0) return 0;
  g.sort((a, b) => a - b);
  if (g.reduce((acc, curr) => acc + curr, 0) <= m) {
    return g.length;
  }
  while (g.reduce((acc, curr) => acc + curr, 0) > m) {
    g.pop();
  }
  return g.length;
}
console.log(howManyGifts(20, [13, 2, 1, 1, 1, 1, 4, 6, 1]));
