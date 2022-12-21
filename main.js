function unusedDigits() {
  const arr = [...arguments].join("").split("").map(Number);
  const res = [];
  for (let i = 0; i < 10; i++) {
    if (!arr.includes(i)) {
      res.push(i);
    }
  }
  return res.join("");
}
console.log(unusedDigits(2015, 8, 26));
