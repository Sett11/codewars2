const paintLetterboxes = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  const newArr = arr.map((el) => (el = String(el))).join("").split``
    .sort((a, b) => a - b)
    .map(Number);
  const res = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => [el]);
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (res[j][0] === newArr[i]) {
        res[j].push(newArr[i]);
      }
    }
  }
  return res.map((el) => (el = el.length - 1));
};
console.log(paintLetterboxes(125, 132));
