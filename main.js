function numObj(s) {
  const arr = s.map((el) => String.fromCharCode(el));
  const obj = Array.from({ length: s.length }, (x) => (x = {}));
  obj.map((el, i) => (el[s[i]] = arr[i]));
  return obj;
}
console.log(numObj([118, 117, 120]));
