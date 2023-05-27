function same(a,b,f=x=>x.sort((a,b)=>a-b),r=x=>x.sort((a,b)=>a[0]-b[0]||a[1]-b[1])){
  if(a.length!==b.length)return !1
  for(let i=-1;++i<a.length;)f(a[i]),f(b[i])
  return JSON.stringify(r(a))===JSON.stringify(r(b))
}

console.log(same([[2,5], [3,6]], [[5,2], [3,6]]))