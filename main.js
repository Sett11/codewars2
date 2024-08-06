function recordDepth(h,d=0){
  if(!h||typeof h!=='object'||Array.isArray(h))return null
  h.depth=d
  for(let i in h)if(typeof h[i]=='object')recordDepth(h[i],d+1)
  return h
}

console.log(recordDepth({ a: 1, b: 2, c: { d: { e: 3 } } }))