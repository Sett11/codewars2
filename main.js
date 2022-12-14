function balance(left, right) {
  const l = left
    .split("")
    .map((el) => {
      if (el === "!") {
        el = 2;
        return el;
      }
      if (el === "?") {
        el = 3;
        return el;
      }
    })
    .reduce((acc, curr) => acc + curr, 0);
  const r = right
    .split("")
    .map((el) => {
      if (el === "!") {
        el = 2;
        return el;
      }
      if (el === "?") {
        el = 3;
        return el;
      }
    })
    .reduce((acc, curr) => acc + curr, 0);
  return l > r ? "Left" : r > l ? "Right" : "Balance";
}
console.log(balance("!??", "?!!"));
