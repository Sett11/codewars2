function solve(s) {
  const arr = s.split``.map((el) => parseInt(el, 36) - 10).sort((a,b) => a - b)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      continue;
    }
    if (i === arr.length - 1 && arr[i-1] === arr[i]-1) {
      break;
    }
    return false;
  }
  return arr.every((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
}
console.log(solve("gjmhkfil"));
