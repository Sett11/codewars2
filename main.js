bind=(l,f,r=[])=>{
  if(!Array.isArray(f(l[0])))throw Error()
  l.forEach(e=>f(e).forEach(u=>r.push(u)))
  return r
}

console.log(bind([3,4,5], function(a){return [[a,-a]]}))