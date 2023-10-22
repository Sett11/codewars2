const matrixSquareUp = (n) => {
  const a = Array(n).fill(1).map((_, i) => (n - i)+''),r = []
  for (let i = n + 1; --i; ) {
    let t = Array(n - i).fill("x")
    r.unshift(t.concat(a.slice(t.length)))
  }
  return r
}

console.log(matrixSquareUp(4));
