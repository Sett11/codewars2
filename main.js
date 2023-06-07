function draw(a,n=Math.max(...a)){
  const r=a.map(e=>[...'■'.repeat(e)+'□'.repeat(n-e)].reverse())
  return r[0].map((_,i)=>r.map(u=>u[i]).join``).join`\n`
}

console.log(draw([1,2,3,3,2,1,1,2,3,4,5,6,7]))