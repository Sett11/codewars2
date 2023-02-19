function primeProduct(n){
  if(n<4)return 0
  const F=(x)=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true};x=n-1,arr=[]
  while(x>2){x--;if(F(x)&&F(n-x))arr.push(x*(n-x))}return !arr.length?0:Math.max(...arr)
}
console.log(primeProduct(1001))