function highestRank(arr) {
  const res = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const result = [...Object.values(res)];
  const nextRes = result.lastIndexOf(Math.max(...result));
  const keysArr = [...Object.keys(res)];
  return Number(keysArr[nextRes]);
}
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
