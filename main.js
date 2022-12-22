function evenChars(string) {
  if (string.length < 2 && string.length > 100) {
    return "invalid string";
  }
  const str = string.split``;
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
      arr.push(str[i]);
    }
  }
  return arr;
}
console.log(evenChars("abcdefghijklm"));
