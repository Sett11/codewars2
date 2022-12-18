function solve(arr) {
  const arr1 = arr.slice().sort((a, b) => a - b);
  const arr2 = arr.slice().sort((a, b) => b - a);
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr2[i]);
    res.push(arr1[i]);
  }
  res.length = arr.length;
  return res;
}
console.log(solve([15, 11, 10, 7, 12]));
