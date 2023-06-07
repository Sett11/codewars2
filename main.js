zoom=z=(n,r=[['■']],c=0)=>{
  if(n===1)return r.map(e=>e.join``).join`\n`
	let t=c%2!==0?'■':'□',l=r[0].length+2,q=[...t.repeat(l)]
  r=r.map(e=>{
    e.unshift(t),e.push(t)
    return e
  })
  r=r.map(e=>{
    while(e.length>l)e=e.slice(1,-1)
    return e
  })
  r.unshift(q),r.push(q)
  return z(n-2,r,c+1)
}

console.log(zoom(25))