function meeting(x, need) {
  if (need === 0) {
    return "Game On";
  }
  const res = x.map(([x, y]) => Math.max(...[y - x.length, 0]));
  let sum = res.reduce((acc, curr) => acc + curr, 0);
  if (sum < need) {
    return "Not enough!";
  }
  sum = 0;
  const arr = [];
  while (sum < need) {
    tmp = res.shift();
    sum += tmp;
    arr.push(tmp);
  }
  arr[arr.length - 1] -= sum - need;
  return arr;
}
console.log(
  meeting(
    [
      ["XXX", 1],
      ["XXXXXX", 6],
      ["X", 2],
      ["XXXXXX", 8],
      ["X", 3],
      ["XXX", 1],
    ],
    5
  )
);
