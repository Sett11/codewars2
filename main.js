const primeArray=n=>{
  n+=1
  let a=Array(n).fill(true),r=[]
  a[0]=a[1]=false
  for(let i=1;++i<n**.5+1;){
    if(a[i]){
      for(let j=2*i;j<n;j+=i){
        a[j]=false
      }
    }
  }
  a.forEach((e,i)=>e?r.push(i):null)
  return r
}

console.log(primeArray(2))