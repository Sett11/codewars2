function onlyOddDigPrimes(n,a=[],c=2) {
  const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
  while(1){
    t=[...c+''].map(Number)
    if(f(c)&&t.every(e=>e%2!==0))a.push(c)
    c++
    if(a.some(e=>e>n))break
  }
  return [a.filter(e=>e<=n).length, a.includes(n)?a[a.indexOf(n)-1]:a[a.length-2],a[a.length-1]]
}
console.log(onlyOddDigPrimes(100))