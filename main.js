function diagonalSum(matrix) {
  let sum = null;
  matrix.map((el, i) => {
    sum += el[i];
  });
  return sum;
}
console.log(
  diagonalSum([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
