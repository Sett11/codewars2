Array.prototype.filter=function(f,t){
  if(t)f=f.bind(t)
  const a=[],q=this,n=q.length
  for(let i=-1;++i<n;){
    if(i in q){
      if(f(q[i],i,q))a.push(q[i])
    }
  }
  return a
}

console.log([1, 2, 3, 4, 5].filter(function(x) {return (x + this) % 2 == 0; }))