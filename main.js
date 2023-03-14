function oddNotPrime(n){
  const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
  return Array(n).fill(1).map((e,i)=>i+1).filter(e=>e&1&&!f(e)).length
}
console.log(oddNotPrime(10))