histogram=r=>{
  if(r.every(e=>!e))return '-----------\n1 2 3 4 5 6\n'
  let a=r.map((e,i)=>{
    e=[...('#'.repeat(e)||' ')]
    e.unshift(r[i])
    while(e.length<=Math.max(...r))e.unshift(' ')
    return e
  })
  a=a[0].map((_,i)=>a.map(u=>u[i]||' ')).map(e=>{
    e=e.join` `
    while(e[e.length-1]===' ')e=e.slice(0,-1)
    return e
  })
  a.push('-'.repeat(Math.max(...a.map(e=>e.length))))
  a.push(Array(r.length).fill(1).map((e,i)=>i+e).join` `)
  return a.join`\n`+'\n'
}

console.log(histogram([7,3,10,1,0,5]))