function simpleHash(w,s,n){
  let q='',r=[]
  for(i=-1;++i<w.length;)q+=w[i]+(s[i]||'')
  if(i<s.length)q+=[...s].slice(w.length,s.length).join``
  while(n){
    for(let i=-1;++i<q.length;){
      let t=q[i].charCodeAt()+q[(i+1)%q.length].charCodeAt()
      while(t>127)t-=96
      r.push(String.fromCharCode(t))
    }
    n-=1,q=r.join``
    r=n?[]:r
  }
  return btoa(r.join``)
}

console.log(simpleHash('hi','salt',2))