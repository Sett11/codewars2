const isPP = function (n) {
  let curr = 2;
  let pow = 2;
  let max = Math.floor(n / 2);
  while (curr <= max) {
    pow = 2;
    while (curr ** pow <= n) {
      if (n === curr ** pow) {
        return [curr, pow];
      } else {
        pow += 1;
      }
    }
    curr += 1;
  }
  return null;
};
console.log(isPP(484));
