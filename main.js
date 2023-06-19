function getADownArrowOf(n,r=[],a=[],i=1){
  while(i<=n)r.push(a.join``+i%10+a.slice().reverse().join``),a.push(((i++)%10))
  return r.reverse().map((e,i,v)=>{
    let t=Math.max(...v.map(u=>u.length))
    while(e.length<t)e=e.replace(e,' $& ')
    while(e[e.length-1]===' ')e=e.slice(0,-1)
    return e
  }).join`\n`
}

console.log(getADownArrowOf(10))