function amIWilson(p) {
  p = BigInt(p)
  const f = (x) => {
    if (x <= 1n) {
      return 1n;
    }
    return x * f(x - 1n);
  };
  return ((f(p - 1n)) + 1n) % (p * p) == 0n
}
console.log(amIWilson(563));
