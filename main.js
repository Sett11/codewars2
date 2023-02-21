function findOutPrime(n){
  const F=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true};arr=[],check=[...(n+'')]
  if(F(n))return n
  for(let i=0;i<check.length;i++){
    for(let j=i;j<check.length;j++){
    let tmp=check.slice(i,j+1).join``
    if(F(+tmp))arr.push(tmp)
    }
  }return !arr.length?null:Math.max(...arr)
}
console.log(findOutPrime(1052326572))