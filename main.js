function getScore(ar) {
  const arr = [0, 40, 100, 300, 1200];
  let count = 0,
    level = 0;
  for (let n of ar) {
    count += arr[n] * (1 + ((level / 10) | 0));
    level += n;
  }
  return count;
}
console.log(
  getScore([3, 2, 1, 2, 2, 1, 4, 4, 4, 3, 3, 0, 2, 1, 1, 0, 3, 4, 4, 3, 3, 4])
);
