function solve(arr) {
  return arr.map(el=>[...new Set(el)].length).reduce((a,c)=>a*c)
};
console.log(solve([[1,2],[3,4],[5,6]]))