function sumMul(n, m) {
  if (m < n || m <= 0) {
    return "INVALID";
  }
  let arr = [];
  for (let i = n; i < m; i += n) {
    arr.push(i);
  }
  return arr.reduce((x,y) => x + y, 0)
}
console.log(sumMul(4, 123));
