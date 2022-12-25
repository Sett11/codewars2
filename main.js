function solve(a) {
  let odd = 0,
    even = 0;
  a.map(el => typeof el === 'number' && el %2===0?  even++ : typeof el === 'number' && el %2!==0? odd++:null)
  return even - odd;
}

console.log(
  solve([
    5,
    15,
    16,
    10,
    6,
    4,
    16,
    "t",
    13,
    "n",
    14,
    "k",
    "n",
    0,
    "q",
    "d",
    7,
    9,
  ])
);
