zeroOrOne=(m,a)=>a[0].map((_,i)=>a.map(u=>u[i]).sort()[m/2|0])

console.log(zeroOrOne(3,[
  [1,0,1,0,1], 
  [1,1,1,0,1], 
  [0,1,1,1,0]]))