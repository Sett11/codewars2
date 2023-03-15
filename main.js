function coprimes(n){
  const c=Array(n-1).fill(1).map((e,i)=>i+1).filter(e=>n%e===0&&e!==1)
  return Array(n-1).fill(1).map((e,i)=>i+1).filter(e=>c.every(u=>e%u!==0))
}
console.log(coprimes(20))