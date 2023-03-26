function greatestCommonPrimeDivisor(a,b){
 const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
 for(let i=Math.ceil(Math.max(a,b)/2)+1;i>1;i--)if(f(i)&&a%i===0&&b%i===0)return i
 return -1
}

console.log(greatestCommonPrimeDivisor(234,299))