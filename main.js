function geometricSequenceElements(a, r, n) {
  const arr = [];
  arr.push(a);
  arr.push(a * r);
  while (arr.length < n) {
    arr.push(arr.reduce((acc) => acc * r, a));
  }
  return arr.join(", ");
}
console.log(geometricSequenceElements(1, -2, 10));
