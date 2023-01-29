sc = (a) =>
  Math.max(
    (a = a.sort((z, v) => v - z))[0] + a[1],
    a[0] * a[1],
    a[0] - Math.min(...a),
    a[0] * Math.max(...a.map((t) => (t == 0 ? 0 : 1 / t)))
  )
console.log(sc([-1, 2]));
