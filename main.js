function countIslands(m,a=[]){
  m=m.split`\n`.map((e,i)=>[...e].map((u,j)=>u==='0'?[i,j]:0).filter(z=>z)).flat().sort((a,b)=>a[0]-b[0]||a[1]-b[1])
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
  return a.length
}

console.log(countIslands("..000.\n..000.\n..000.\n.0....\n..000."))
console.log(countIslands('00...0\n0...00\n......\n0.0.0.\n0.....'))