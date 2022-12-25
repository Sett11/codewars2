function splitTheBill(x) {
  const arr = Object.values(x);
  const total = (arr.reduce((acc, curr) => acc + curr, 0) / arr.length).toFixed(2)
  for (let k in x) {
    x[k] = (x[k] - total).toFixed(2)
  }
  return x;
}
console.log(splitTheBill({ A: 40, B: 25, X: 10 }));
