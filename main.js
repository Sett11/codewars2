const r=x=>x.reduce((a,c)=>a+c,0)
const f=(x,a=[])=>{
  for(let i=0;++i<=Math.sqrt(x);)if(!(x%i))a.push(i,x/i)
  return r(a)
}
function equalSigma1(n,c=826,a=[528,825]){
  while(c<=n){
    let t=+[...c+''].reverse().join``
    if(f(c)===f(t)&&c!==t)a.push(c,t)
    c++
  }
  return r([...new Set(a.filter(e=>e<=n))])
}

console.log(equalSigma1(1561))