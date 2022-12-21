function freqSeq(str, sep) {
  const arr = str.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const s = str.split("");
  const obj = Object.entries(arr).flat(2);
  for (let i = 0; i < s.length; i++) {
    const gam = obj.indexOf(s[i]);
    if (gam != -1) {
      s[i] = obj[gam + 1];
    }
  }
  return s.join(sep);
}
console.log(freqSeq("hello world", "-"));
