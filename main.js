function primeFactors(n) {
  let arr = [],
    obj = {},
    str = "";
  const f = (x) => {
    if (n > 1) {
      for (let i = 2; i <= x; i++) {
        if (x % i === 0) {
          arr.push(i);
          f(x / i);
          return true;
        }
      }
    } else {
      return true;
    }
  };
  f(n);
  arr.map((el) => {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });
  for (let i in obj) {
    obj[i] == 1 && (str += "(" + i + ")");
    obj[i] > 1 && (str += "(" + i + "**" + obj[i] + ")");
  }
  return str;
}
console.log(primeFactors(7775460));
