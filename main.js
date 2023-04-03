checkGoldbach=(n,a=[],r=[],c=2,s=n-1)=>{
  if(n%2!==0&&n>2||n<=2)return []
 const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
 while(1){
  if(c===s)return []
  if(a.length&&r.length&&a.some(e=>r.some(u=>u+e===n)))return a.map(e=>r.map(u=>u+e===n?[u,e]:0).filter(e=>e)).filter(e=>e.length).flat(2).reverse()
  if(f(c))a.push(c)
  if(f(s))r.push(s)
  c++,s--
 }
}

console.log(checkGoldbach(2))