function completeSeries(arr) {
  if (arr.length !== [...new Set(arr)].length) {
    return [0];
  }
  const ar = [];
  for (let i = 0; i <= Math.max(...arr); i++) {
    ar.push(i);
  }
  return ar;
}
console.log(completeSeries([1, 4, 6]));
