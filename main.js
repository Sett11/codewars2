function convergence(n,a=[n],c=1,r=[c],z=0){
  const f=x=>x<10?x+x:x+[...x+''].map(Number).filter(e=>e).reduce((a,c)=>a*c)
  while(1){
    if(a.length&&r.length&&a.some(e=>r.includes(e))){
      for(let i=0;i<a.length;i++){
        if(r.includes(a[i])){
          z=a[i]
          break
        }
      }
      break
    }
    a.push(f(n));n=f(n);r.push(f(c));c=f(c)
  }
  return a.filter(e=>e<z).length
}

console.log(convergence(15))