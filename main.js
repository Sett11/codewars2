function ofThe(a,s){
  if(!s||a.length<2)return a
  s=(' of '+s).split` of the `.filter(e=>e)
  const f=(ar,ar2)=>{
    if(!ar2.length||ar.length<2)return ar
    let t=ar2.pop(),n=ar.length/2,v=~~n+(n%1&&t=='biggest'?1:0)
    return f(ar.slice().sort((a,b)=>t==='biggest'?b-a:a-b).slice(0,v).sort((a,b)=>ar.indexOf(a)-ar.indexOf(b)),ar2)
  }
  let z=f(a,s),u=new Set(z),r=[],d={},k=[...u]
  for(let i=-1;++i<k.length;)d[k[i]]=0
  for(let i=-1;++i<z.length;)d[z[i]]+=1
  for(let i=-1;++i<a.length&&r.length<z.length;){
    if(u.has(a[i])&&d[a[i]]){
      r.push(a[i])
      d[a[i]]-=1
    }
  }
  return r
}

console.log(ofThe([
  6, 2,   3,  775, 5255,
  0, 6,   5, 4681, 2766,
  4, 6, 407
] ,'the biggest of the biggest of the smallest'))