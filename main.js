function solve(n,c=n,s=n,a=[]){
  const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
  while(1){
    if(f(c))return c
    if(f(s))return s
    c--,s++
  }
  }
console.log(solve(35000))
console.log(solve(350000))