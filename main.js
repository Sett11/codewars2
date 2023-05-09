function abundance(n,a=[],c=12){
  const f=(x,a=[])=>{
    for(let i=1;i<x/2+1;i++)if(x%i===0)a.push(i)
    return a
  }
  while(a.length<n){
    let t=f(c).reduce((a,c)=>a+c,0)
    if(t>c)a.push([c,t-c])
    c++
  }
  return a.sort((a,b)=>a[1]-b[1]||a[0]-b[0]).map(e=>e[0])
}

console.log(abundance(51))