function prefill(n, v) {
  if (Number.isNaN(parseInt(n)) || n % 1 !== 0 || n < 0) {
    throw new TypeError(`${n} is invalid`);
  }
  return Array.from({length: n}).fill(v)
}
console.log(prefill(3, 1.2));
