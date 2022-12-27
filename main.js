function createArrayOfTiers(num) {
  const arr = String(num).split``;
  const res = [];
  for (let i = 0; i <= arr.length; i++) {
    res.push(arr.slice(0, i));
  }
  return res.map((el) => el.join``).filter((el) => el !== "");
}
console.log(createArrayOfTiers(2017));
