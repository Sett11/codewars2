function sumPairs(ints, s) {
  const newS = new Set();
  for (let i = 0; i < ints.length; i++) {
    let curr = ints[i];
    if (newS.has(s - curr)) return [s - curr, curr];
    else newS.add(curr);
  }
}
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
