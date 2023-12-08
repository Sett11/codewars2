const e=n=>{
    const r=Array(n+1).fill(true)
    r[0]=r[1]=false
    for(let i=1;++i<Math.floor(n**.5+1);){
      if(r[i]){
        for(let j=i*2-i;(j+=i)<n;)r[j]=false
      }
    }
    const res=[]
     r.forEach((u,i)=>u?res.push(i):null)
     return res
  }
  
  const a=e(15486042)
  
  class Primes {
    static *stream() {
      for(let i=0;i<a.length;i++){
        yield a[i]
      }
    }
  }