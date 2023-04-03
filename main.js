function winner(c,a=[],r=0){
  console.log(c)
  if(!c||c.length!==3)return false
  for(let i of c){
    if(!Array.isArray(i.scores)||!i.name||!i.scores||!i.scores.length||i.scores.length>2||i.scores.some(e=>+e!==+e||e%5!==0||e>100))return false
    const x=i.scores.reduce((a,c)=>a+c,0)
    r=Math.max(x,r)
    a.push([i.name,x])
  }
  if(a.every(e=>e[1]>100))return false
  return a.filter(e=>e[1]===r)[0][0]
}

console.log(winner([
  { name: "Bob", scores: [10, 65]},
{ name: "Bill", scores: [90, 5] },
{ name: "Charlie", scores: [40, 55] }]))