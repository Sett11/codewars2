function f(x,y,a=[],m=[]){
  x=x.map((e,i)=>e.map((u,j)=>u===y?[i,j]:0).filter(z=>z)).filter(e=>e.length)
  x.forEach(e=>e.forEach(u=>m.push(u)))
  for(let i=0;i<m.length;i++){
    let t=[m[i]]
    for(let j=0;j<m.length;j++){
      if(t.some(e=>e[0]===m[j][0]&&Math.abs(m[j][1]-e[1])===1||e[1]===m[j][1]&&Math.abs(m[j][0]-e[0])===1)&&m[j][0]!==undefined){
        t.push(m[j])
        m[j]=[]
        j=0
      }
    }
    if(t[0][0]!==undefined)a.push(t)
  }
  return [a.map(e=>[...new Set(e)])]
}
function findChain(a,s=[...new Set(a.join``.match(/[a-z]/g))]){
  return [...f(a,s[0]),...f(a,s[1]),...f(a,s[2]),...f(a,s[3])].map(e=>e.sort((a,b)=>b.length-a.length)[0]).sort((a,b)=>b.length-a.length).filter((e,i,v)=>e.length===v[0].length).map(e=>e.sort((a,b)=>a[0]-b[0]||a[1]-b[1])).sort((a,b)=>a[0][0]-b[0][0]||a[0][1]-b[0][1])[0]
}

console.log(findChain([ [ 'c', 'b', 'c', 'c', 'd', 'a', 'c', 'd', 'd', 'a' ],
[ 'b', 'a', 'd', 'd', 'b', 'c', 'd', 'd', 'a', 'd' ],
[ 'd', 'b', 'c', 'a', 'd', 'c', 'a', 'b', 'd', 'c' ],
[ 'a', 'c', 'b', 'b', 'b', 'c', 'a', 'd', 'd', 'd' ],
[ 'c', 'b', 'c', 'c', 'a', 'a', 'b', 'd', 'b', 'c' ],
[ 'b', 'c', 'd', 'd', 'd', 'b', 'd', 'c', 'a', 'd' ],
[ 'd', 'd', 'b', 'b', 'c', 'c', 'a', 'b', 'a', 'c' ],
[ 'c', 'b', 'c', 'd', 'b', 'd', 'c', 'b', 'd', 'b' ],
[ 'a', 'b', 'b', 'b', 'c', 'a', 'd', 'a', 'c', 'c' ],
[ 'c', 'a', 'b', 'a', 'a', 'd', 'c', 'a', 'd', 'd' ] ]))