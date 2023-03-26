function relativelyPrime(n,l){
  const f=(x,y)=>{for(let i=2;i<Math.min(x,y)+1;i++){if(x%i===0&&y%i===0)return false}return true}
  return l.filter(e=>f(e,n))
}

console.log(relativelyPrime(8,[1,2,3,4,5,6,7]))