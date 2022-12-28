const isSquare = (arr) =>
  arr.length === 0 ? undefined : arr.map((el) => Number.isInteger(Math.sqrt(el))).every((el) => el === true);
console.log(isSquare([1, 4, 9, 16, 25, 36]));
