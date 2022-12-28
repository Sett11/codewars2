function isValidWalk(w) {
  if (w.length !== 10) {
    return false;
  }
  const obj = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };
  for (let i = 0; i < w.length; i++) {
    obj[w[i]]++;
  }
  if (obj["n"] !== obj["s"] || obj["w"] !== obj["e"]) {
    return false;
  } else {
    return true;
  }
}
console.log(isValidWalk(["n", "w", "s", "e", "s", "e", "n", "w", "n", "s"]));
