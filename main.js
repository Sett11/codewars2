function testResult(a) {
  const sum = a.reduce((acc, curr) => acc + curr, 0) / a.length,
    arr = [],
    arr1 = [],
    arr2 = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 8) {
      arr.push(a[i]);
    }
    if (a[i] <= 8 && a[i] > 6) {
      arr1.push(a[i]);
    }
    if (a[i] <= 6) {
      arr2.push(a[i]);
    }
  }
  return arr1.length === 0 && arr2.length === 0
    ? [parseFloat(sum.toFixed(3)), { h: arr.length, a: arr1.length, l: arr2.length }, "They did well"]
    : [parseFloat(sum.toFixed(3)), { h: arr.length, a: arr1.length, l: arr2.length }];
}
console.log(testResult([5, 6, 4, 8, 9, 8, 9, 10, 10, 10]));
