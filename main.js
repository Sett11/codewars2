function allNonConsecutive(arr) {
  const ar = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      ar.push([arr.indexOf(arr[i + 1]), arr[i + 1]]);
    }
  }
  return ar
    .map((el, i) => {
      if (el[0] !== undefined && el[1] !== undefined) {
        el = { i: el[0], n: el[1] };
        return el;
      }
    })
    .filter((el) => el);
}
console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
