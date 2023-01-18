function bears(x, s) {
  const res = !s.match(/B8|8B/g) ? "" : s.match(/B8|8B/g).join``;
  return [res, res.length / 2 >= x];
}
console.log(bears(4, "8B8B8BB"));
