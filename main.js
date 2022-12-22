function isDivisible() {
  const arg = [...arguments];
  if (arg.length === 1) {
    return true;
  }
  const first = arg.shift();
  return arg.every((el) => first % el === 0);
}
console.log(isDivisible(12, 3, 4, 5));
