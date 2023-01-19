function arraySum(ar) {
  const arr = [];
  ar.flat(100).map((el) => (typeof el === "number" ? arr.push(el) : null));
  return arr.reduce((acc,curr)=>acc+curr,0)
}

console.log(arraySum([1, 2, { t: 9 }, 4, 5, [1, 2, [3], 9, { a: 8 }]]));
