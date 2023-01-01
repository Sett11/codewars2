function sumOrProduct(a, n) {
  const arr1 = [],
    arr2 = [];
  a = a.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    arr1.push(a[i]);
    arr2.push(a[a.length - i-1]);
  }
  const sum1 = arr1.reduce((acc, curr) => acc * curr)
  const sum2 = arr2.reduce((acc, curr) => acc + curr)
  return sum1 > sum2 ? 'product' : sum1 < sum2 ? 'sum' : 'same'
}
console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3));
