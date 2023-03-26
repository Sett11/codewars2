takeWhile=(a,f,r=[])=>{
  for(let i=0;i<a.length;i++){
    if(!f(a[i]))break
    if(f(a[i])){
      for(let j=i+1;j<a.length;j++){
        if(!f(a[j])){
          r.push(a.slice(i,j))
          break
        }
        if(j===a.length-1&&f(a[j]))r.push(a.slice(i))
      }
    }
  }
  return r.sort((a,b)=>b.length-a.length)[0]||[]
}

console.log(takeWhile([2,4,10,100,64,78,92],e=>e%2===0))