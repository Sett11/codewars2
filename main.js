function separateLiquids(a,r=[],c=[]){
  const o={'H':1.36,'W':1.0,'A':0.87,'O':0.80}
  a.forEach(e=>e.forEach(u=>r.push([u,o[u]]))),r.sort((a,b)=>a[1]-b[1])
  for(let i=0;i<r.length;i+=a[0].length)c.push(r.slice(i,i+a[0].length))
  return c.map(e=>e.map(u=>u[0]))
}

console.log(separateLiquids([]))