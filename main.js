const sumUpNoAdjacents=(a,k)=>{
  if(!k&&a.length)return true
  let n=a.length,s=new Set(),r=[]
  a=a.map((e,i)=>([e,i]))
  for(let i=0;++i<2**n;){
    let p=1,t=[]
    for(let j=-1;++j<n;){
      if(a[j][0]==k)return true
      if(p&i){
        if(t.length==0){
          t.push(a[j])
          continue
        }
        if(t.length){
        if(Math.abs(a[j][1]-t[t.length-1][1])>1){
          t.push(a[j])
        }
      }
        if(t.map(e=>e[0]).reduce((acc,cur)=>acc+cur,0)>k)break
      }
      p*=2
    }
    if(t.map(e=>e[0]).reduce((acc,cur)=>acc+cur,0)==k){
      t=t.sort((b,c)=>b-c)
      let l=t.join``
      if(!s.has(l)){
        r.push(t)
        s.add(l)
      }
    }
  }
  return !!r.length
 }

console.log(sumUpNoAdjacents([2,5,10,4],12))
console.log(sumUpNoAdjacents([2,5,10,4],14))
console.log(sumUpNoAdjacents([2,5,10,4],7))
console.log(sumUpNoAdjacents([
  24, 28,  9, 14, 19, 20,
   8, 12,  3, 22, 10, 13,
   6, 15, 15, 23
],9))