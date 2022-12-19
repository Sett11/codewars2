function thirt(n) {
  const basic = [
    1, 10, 9, 12, 3, 4, 1, 10, 9, 12, 3, 4, 1, 10, 9, 12, 3, 4, 1, 10, 9, 12, 3,
    4,
  ];
  const total = ("" + n).split("").map(Number).reverse();
  const arr = [];
  for (let i = 0; i < total.length; i++) {
    arr.push(total[i] * basic[i]);
  }
  let wow = ("" + arr.reduce((acc, curr) => acc + curr, 0))
    .split("")
    .map(Number)
    .reverse();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(wow[i] * basic[i]);
  }
  if (res.length === 2) {
    return res
      .filter((el) => Number.isFinite(el))
      .reduce((acc, curr) => acc + curr, 0);
  }
  res = res
    .filter((el) => Number.isFinite(el))
    .reduce((acc, curr) => acc + curr, 0);
  let Oh = ("" + res).split("").map(Number).reverse();
  let finiteRes = [];
  for (let i = 0; i < arr.length; i++) {
    finiteRes.push(Oh[i] * basic[i]);
  }
  return finiteRes
    .filter((el) => Number.isFinite(el))
    .reduce((acc, curr) => acc + curr, 0);
}
console.log(thirt(987663637354321));
