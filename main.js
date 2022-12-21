const lastDigit = (n, d) =>
  d <= 0 ? [] : ("" + n).split("").map(Number).reverse().slice(0, d).reverse();
console.log(lastDigit(34625647867585, 10));
