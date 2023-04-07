function oddity(n,a=new Set()){
  const f=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
  if(f(n))return 'even'
  for(let i=1;i<Math.sqrt(n)+1;i++){
    if(n%i===0){
      a.add(i),a.add(n/i)
    }
  }
  return a.size%2===0?'even':'odd'
}

console.log(oddity(100))