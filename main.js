function lastSurvivors(str) {
  const letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  let newStr = str.split``.map((el) => parseInt(el, 36) - 10);
  for (let i = 0; i < newStr.length; i++) {
    let ind1 = newStr.indexOf(newStr[i]),
      ind2 = newStr.lastIndexOf(newStr[i]);
    if (ind1 !== ind2) {
      newStr[ind1] += 1;
      newStr[ind2] = "&";
      newStr = newStr.filter((el) => el !== "&");
      if (newStr[i] > 25) {
        newStr[i] = (newStr[i] % 25) - 1;
      }
      if (newStr.length > [...new Set(newStr)].length) {
        i = 0;
      }
      if (newStr[i] > 25) {
        newStr[i] = (newStr[i] % 25) - 1;
      }
      if (newStr.length > [...new Set(newStr)].length) {
        i = 0;
      }
    }
  }
  return newStr.map((el) => letters[el]).sort().join``;
}
console.log(lastSurvivors("lxxoygparcpklltwnkoywtcnhgsqpxe"));
