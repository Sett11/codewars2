function averageLength(a) { 
  let n=Math.round(a.map(e=>e.length).reduce((e,c)=>e+c,0)/a.length)
  return a.map(e=>e.repeat(n).slice(0,n))
}

console.log(averageLength(['aa', 'bb', 'ddd', 'eee']))