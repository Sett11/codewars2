const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}

sexy_prime=(x,y)=>Math.abs(x-y)===6&&f(x)&&f(y)