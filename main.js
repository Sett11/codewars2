function binaryToString(binary) {
  const bin = binary.split("");
  const arr = [];
  for (let i = 0; i < bin.length; i += 8) {
    arr.push(bin.slice(i, i + 8));
  }
  return arr
    .map((el) => el.join(""))
    .map((el) => String.fromCharCode(parseInt(el, 2)))
    .join("");
}
console.log(
  binaryToString("01001011010101000100100001011000010000100101100101000101")
);
