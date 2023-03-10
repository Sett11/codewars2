function backwardsPrime(s,c,a=[]){
  const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
  for(let i=s;i<=c;i++){
    if(f(i)&&f(+[...i+''].reverse().join``)&&i!==+[...i+''].reverse().join``)a.push(i)
  }
  return a
}

console.log(backwardsPrime(9900, 10000))