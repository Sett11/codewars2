function isLucky(n) {
  const arr = ("" + n)
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
  const sum = arr / 9;
  return arr === 0 || Number.isInteger(sum) ? true : false;
}
console.log(isLucky(0));
