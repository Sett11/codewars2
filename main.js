function solve(arr) {
  return arr.map((el) =>
    [...el]
      .map((el, i) => {
        if (i === parseInt(el, 36) - 10) {
          el = 1;
          return el;
        } else {
          el = 2;
          return el;
        }
      })
      .filter((el) => el !== 2)
      .reduce((acc, curr) => acc + curr, 0)
  );
}
console.log(solve(["encode", "abc", "xyzD", "ABmD"]));
