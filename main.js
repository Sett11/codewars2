function solve(s) {
  s = s.split``;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      arr.push(s[i + 1]);
    }
  }
  return arr.length;
}
console.log(solve("RRRRGGGGBBBB"));
