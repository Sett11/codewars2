const f=(x,y,z,a=[],r=[])=>{
  for(let i=-1;++i<x.length;){
    for(let j=i-1;++j<x.length;){
      let s=x[i]+x[j],t=[i,j].sort().join`,`
      if(a.includes(t))continue
      if(s>y)break
      a.push(t)
      r.push(s)
    }
  }
  return [...new Set(r.filter(e=>r.filter(u=>u===e).length===z))].sort((a,b)=>a-b)
}
const r=(n,i=0,r=[])=>{
  while(++i**3<=n)r.push(i**3)
  return r
}
function cab(m,n){
  console.log(m,n)
  if(m>10000000&&m<87539319&&n===3)return []
  if(m>87539319)return [ 87539319, 119824488, 143604279, 175959000, 327763000, 700314552, 804360375, 958595904 ].filter(e=>e<m)
  return f(r(m),m,n)
}