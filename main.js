function mean(lst) {
  const num = [], letter = [];
  for (let i = 0; i < lst.length; i++) {
    if (/[0-9]/.test(lst[i])) {
      num.push(lst[i]);
    } else {
      letter.push(lst[i]);
    }
  }
  const res = num.map(Number).reduce((acc, curr) => acc + curr, 0);
  return [res / num.length, letter.join("")];
}
console.log(
  mean([
    "u",
    "6",
    "d",
    "1",
    "i",
    "w",
    "6",
    "s",
    "t",
    "4",
    "a",
    "6",
    "g",
    "1",
    "2",
    "w",
    "8",
    "o",
    "2",
    "0",
  ])
);
