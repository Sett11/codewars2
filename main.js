resolver=(g,s,b=[...s].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{}))=>{
  const r=[...g].map((e,i)=>{
    if(e===s[i]){
      b[e]-=1
      return '&'
    }
   return e
  })
  return r.map(e=>{
    if(e==='&')return 'g'
    if(b[e]){
      b[e]-=1
      return 'y'
    }
    return 'b'
  }).join``
}

console.log(resolver( 'wooer','ivory'))