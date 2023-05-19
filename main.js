function bingo(c,n,o=c[0].map((e,i)=>c.map(u=>u[i])).map(e=>e.slice(1).map(u=>e[0]+u)),v=c[0].map((e,i)=>o.map(u=>u[i])).filter(e=>e),z=2,w=[]){
  const f=x=>x.reduce((a,c)=>a.concat(Array.isArray(c)?f(c):[c]),[])
  while(z){
    let t=[]
    for(let i=0;i<o.length;i++)t.push(o[i][i])
    w.push(t),o=o.reverse(),z--
  }
  const r=(o.concat(v).concat(w)).map(e=>e.includes('NFREE SPACE')?e.slice(0,2).concat(e.slice(3)):e)
  n=n.filter(e=>f(r).includes(e))
  return r.some(e=>e.every(u=>n.includes(u)))
}

console.log(bingo([
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
],['B1', 'I16', 'N31', 'G46', 'O61']))
console.log(bingo([
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
],['B1', 'I16', 'N31', 'G46', 'O63', 'O61']))