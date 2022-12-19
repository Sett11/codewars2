function mergeArrays(a, b) {
  const res = [];
  for (let i = 0; i < a.length + b.length; i++) {
    res.push(a[i]);
    res.push(b[i]);
  }
  return res.filter((el) => el !== undefined);
}
console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]));
