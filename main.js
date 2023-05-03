function conquerIsland(m,a=[],r=[],z=[],x=100){
  m.forEach((e,i)=>e.forEach((u,j)=>u==='p'?z.push([i,j]):u==='u'?a.push([i,j]):u==='m'?r.push([i,j]):0)) 
  z.forEach(e=>(a.length?a:r).forEach(u=>x=Math.min(Math.abs(e[0]-u[0])+Math.abs(e[1]-u[1]),x)))
  return a.length===1?a:!a.length&&r.length===1?r:!a.length&&!r.length?[]:(a.length?a:r).filter(u=>z.some(e=>Math.abs(e[0]-u[0])+Math.abs(e[1]-u[1])===x)).sort((a,b)=>a[0]-b[0]||a[1]-b[1])
}

console.log(conquerIsland([
  [
    '~', '~', '~',
    '~', '~', '~',
    '~', '~'
  ],
  [
    '~', '~', 'p',
    '~', '~', '~',
    '~', '~'
  ],
  [
    '~', '~', '~',
    '~', '~', 'p',
    '~', '~'
  ],
  [
    '~', '~', '~',
    '~', '~', '~',
    '~', '~'
  ],
  [
    '~', '~', '~',
    '~', '~', '~',
    '~', '~'
  ],
  [
    '~', 'm', '~',
    '~', '~', '~',
    '~', 'm'
  ],
  [
    '~', '~', '~',
    '~', '~', '~',
    '~', '~'
  ],
  [
    '~', '~', '~',
    '~', 'm', '~',
    '~', '~'
  ]
]))