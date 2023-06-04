const f=(x,r=[0])=>{
  a=0,b=1,c=0
  while(a<x){
    c=b,b+=a,a=c
    r.push(a)
  }
  return r
}
function zeckendorf(n,q=x=>eval(x.join`+`)){
  const r=f(n).filter(e=>e<n).reverse(),a=[r[0]]
  for(let i=0;++i<r.length;){
    a.push(r[i])
    let t=q(a)
    if(t>n)a.pop()
    if(t===n)return a
  }
  return n===1?[1]:!n?[]:null
}

console.log(zeckendorf(1))