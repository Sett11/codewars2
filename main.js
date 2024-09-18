Array.prototype.map=function(f,t){
  if(t)f=f.bind(t)
  const out=[],p=this,n=p.length
  for(let i=-1;++i<n;)if(i in p)out.push(f(p[i],i,p))
  if(!out.length&&n)return Array(n)
  if(out.length<n)return Array(n-1).concat(out)
  return out
}

console.log(new Array(2).concat([null]).map(function(x) { return 1; }))