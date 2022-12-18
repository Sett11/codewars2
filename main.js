function diamond(n) {
  if (n < 3 || n % 2 === 0) {
    return null;
  }
  let midll = parseInt((n + 1) / 2);
  let first,
    last = "";
  for (let i = 1; i <= n; i++) {
    first = i <= midll ? i : n - i + 1;
    last += " ".repeat(midll - first) + "*".repeat(2 * first - 1) + "\n";
  }
  return last;
}
console.log(diamond(5));
