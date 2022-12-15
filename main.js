function consecutive(arr, a, b) {
  return arr.indexOf(a) + 1 === arr.indexOf(b) ||
    arr.indexOf(a) - 1 === arr.indexOf(b)
    ? true
    : false;
}
console.log(consecutive([1, 3, 5, 7], 3, 7));
