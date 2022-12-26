function makeValley(arr) {
  let db = arr.slice().sort((a, b) => a - b);
  let res = [], res2 = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(db.pop());
    res2.push(db.pop());
  }
  return (res
    .concat(res2.sort((a, b) => a - b))
    .filter((el) => el !== undefined))
}
console.log(makeValley([20, 7, 6, 2]));
