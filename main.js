function consecutive(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const res = [];
  for (let i = min; i < max; i++) {
    if (arr[i] !== i) {
      res.push(i);
    }
  }
  return res.filter((el) => !arr.includes(el)).length;
}

console.log(consecutive([1, 2, 3, 4]));
