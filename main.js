function firstNonRepeated(s) {
  s = s.split``;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      arr.push(s[i]);
    }
  }
  return arr.length === s.length ? arr[0] : arr.length === 0 ? null : arr[0];
}
console.log(firstNonRepeated("teeter"));
