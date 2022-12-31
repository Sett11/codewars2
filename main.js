const bigToSmall = (arr) => {
  const res = [];
  for (let i = 0, j = 1; i < arr.length, j <= arr.length; i++, j++) {
    res.push(...arr[i]);
  }
  return res.sort((a, b) => b - a).join`>`;
};

console.log(
  bigToSmall([
    [13, 2, 24],
    [10],
    [45, 12, 13, 20, 7, 1],
    [37, 34, 43, 16, 44, 47],
    [22],
  ])
);
