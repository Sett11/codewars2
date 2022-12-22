function decomp(n) {
  let obj = {};
  for (let i = 2; i <= n; i++) {
    let count = i;
    for (let j = 2; count > 1; j++) {
      while (count % j === 0) {
        count /= j;
        obj[j] = obj[j] + 1 || 1;
      }
    }
  }
  return Object.keys(obj)
    .map((el) => {
      let res = obj[el];
      return el + (res > 1 ? "^" + res : "");
    })
    .join(" * ");
}

console.log(decomp(22));
