function validSolution(b) {
  const one = b.slice(0,3), one2 = [], one3 = [], one4 = [], two = b.slice(3,6), two2 = [], two3 = [], two4 = [], three = b.slice(6), three2 = [], three3 = [], three4 = []
  one2.push(one[0].slice(0,3))
  one2.push(one[1].slice(0,3))
  one2.push(one[2].slice(0,3))
  one3.push(one[0].slice(3,6))
  one3.push(one[1].slice(3,6))
  one3.push(one[2].slice(3,6))
  one4.push(one[0].slice(6))
  one4.push(one[1].slice(6))
  one4.push(one[2].slice(6))

  two2.push(two[0].slice(0,3))
  two2.push(two[1].slice(0,3))
  two2.push(two[2].slice(0,3))
  two3.push(two[0].slice(3,6))
  two3.push(two[1].slice(3,6))
  two3.push(two[2].slice(3,6))
  two4.push(two[0].slice(6))
  two4.push(two[1].slice(6))
  two4.push(two[2].slice(6))

  three2.push(three[0].slice(0,3))
  three2.push(three[1].slice(0,3))
  three2.push(three[2].slice(0,3))
  three3.push(three[0].slice(3,6))
  three3.push(three[1].slice(3,6))
  three3.push(three[2].slice(3,6))
  three4.push(three[0].slice(6))
  three4.push(three[1].slice(6))
  three4.push(three[2].slice(6))
  const total = [one2, one3, one4, two2, two3, two4, three2, three3, three4].map(el=>el.flat())
  const check = "123456789", arr = []
  for (let i = 0; i < 9; i++) {
    let str = "";
    for (let j = 0; j < 9; j++) {
      str += b[j][i];
    }
    arr.push(str.split(""));
  }
  return arr.map(el=>el.sort((a,b)=>a-b).join``).every(el=>el===check)&&
  b.map(el=>el.sort((a,b)=>a-b).join``).every(el=>el===check)&&total.map(el=>el.sort((a,b)=>a-b).join``).every(el=>el===check)
}
console.log(
  validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5],
  ])
);
