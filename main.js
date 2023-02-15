function solve(s,a,b){
  return s.slice(0,a)+s.slice(a,b+1).split``.reverse().join``+s.slice(b+1)
 }
console.log(solve("codingIsFun",2,200))