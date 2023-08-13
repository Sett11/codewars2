const s=(a,b)=>{
  let c=j=0
  while(c||j<a.length){
    const p=c+((j<a.length)?b*a[j]:0)
    a[j]=p%10,c=Math.floor(p/10)
    j+=1
  }
}
const f=x=>{
  const a=[1]
  for(let i=2;i<=x;++i)s(a,i)
  return a
}
const factorial=n=>f(n).reverse``.join``

console.log(factorial(1123))