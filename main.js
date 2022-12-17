function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length || strarr.length === 0) {
    return "";
  }
  const arr = [];
  for (let i = 0; i <= strarr.length - k; i++) {
    let curr = strarr[i];
    for (let j = k, w = 1; j > 1; j--, w++) {
      curr += strarr[i + w];
    }
    arr.push(curr);
  }
  return arr.reduce((acc, curr) => {
    return acc.length > curr.length
      ? acc
      : acc.length == curr.length
      ? acc
      : curr;
  });
}
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 48)
);
