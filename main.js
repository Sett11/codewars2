function stringBreakers(n, s) {
  (s = s.replace(/\s/g, "").split``), (arr = []);
  for (let i = 0; i < s.length; i += n) {
    arr.push(s.slice(i, i + n));
  }
  return arr.map((el) => "\n" + el.join``).join``.replace(/\n/, "");
}
console.log(stringBreakers(5, "This is an example string"));
