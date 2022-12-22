const solve = (s,g) => s%g === 0 ? [g, s-g] : -1
console.log(solve(12, 5))