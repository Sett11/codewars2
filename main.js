function numberJoy(n) {
  const num = ("" + n).split("").map(Number);
  const sum = num.reduce((acc, curr) => acc + curr, 0);
  return sum * Number(("" + sum).split("").map(Number).reverse().join("")) === n
    ? true
    : false;
}
console.log(numberJoy(1729));
