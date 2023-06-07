const f=x=>{if(x===2)return !1;for(let i=1;++i<=Math.sqrt(x);){if(!(x%i))return i}return !1}
function primeAnt(n){
  let a=[2],c=2,i=0
  while(n){
    let t=f(a[i])
    if(!t)a.push(++c),i++,n--
    else a[i]/=t,a[i-1]+=t,i--,n--
  }
  return i
}

console.log(primeAnt(12))