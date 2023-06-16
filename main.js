function liquidMixing(d,f=x=>x.sort((a,b)=>a-b),q=[],r=[]){
  while(d.length){
    q.unshift(d.shift()),f(q)
    if(q.length&1)r.push(q[Math.floor(q.length/2)])
    else r.push((q[q.length/2-1]+q[q.length/2])/2)
  }
  return r
}

console.log(liquidMixing([10, 20, 8, 12, 6]))