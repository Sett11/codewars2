function bitsWar(a,s=' win'){
  const f=x=>x.map(e=>(e).toString(2).replace(/[0\-]/g,'').length).reduce((a,c)=>a+c,0)
  const b=f(a.filter(e=>e%2!==0&&e>0))-f(a.filter(e=>e%2!==0&&e<0))
  const c=f(a.filter(e=>e%2===0&&e>0))-f(a.filter(e=>e%2===0&&e<0))
  return b>c?'odds'+s:b<c?'evens'+s:'tie'
}

console.log(bitsWar([-8,11,10,18,20,-2,10,-8,9,10,0,-18,-17,9]))