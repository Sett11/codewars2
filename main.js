function pattern(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let res = "";
  for (let i = 1; i < arr.length; i++) {
    res += 1 + "*".repeat(i) + arr[i] + "\n";
  }
  return "1\n" + res.slice(0, res.length-1)
}
console.log(pattern(20));
