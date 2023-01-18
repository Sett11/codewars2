function nextPal(val) {
  let v = true,
    res = "";
  while (v) {
    val++;
    res = String(val).split``;
    if (res.join`` === res.reverse().join``) {
      v = false;
    }
  }
  return Number(res.join``);
}
console.log(nextPal(2541));
