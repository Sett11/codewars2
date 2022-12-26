function noRepeat(str) {
  const arr = str.split``;
  const res = arr.map((el) => {
    if (arr.indexOf(el) === arr.lastIndexOf(el)) {
      return el;
    }
  });
  return res.filter((el) => el !== undefined)[0];
}
console.log(noRepeat("wxyz"));
