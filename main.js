function notPrimes(a,b,c=[]){
  const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
  while(a<=b){
    let tmp=[...a+''].map(Number)
    if(tmp.every(e=>e===2||e===3||e===5||e===7)&&!f(a))c.push(a)
    a++
  }
  return c
}

console.log(notPrimes(999,2500))