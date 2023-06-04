const board=s=>{
  if(s.some((e,i,v)=>e.length!==v[0].length))throw Error('Error rows length')
  let c=[...s[0].slice(1,-1)+s[s.length-1].slice(1,-1)],w=s.map((e,i,v)=>i&&i!==v.length-1?e.charAt(0)+e.charAt(e.length-1):0).filter(e=>e)
  if(c.some(e=>e!=='-')||c.length!==(s[0].length-2)*2||w.some(e=>e!=='||'))throw Error('Border is not closed')
  if(s.join``.match(/[^ \-\+\*\|]/))throw Error('Invalid characters')
  s=s.map(e=>[...e])
  for(let i=0;++i<s.length-1;){
    for(let j=-1;++j<s[i].length;){
      if(s[i][j]==='*'||s[i][j]==='|')continue
      let t=[[i,j+1],[i,j-1],[i+1,j],[i-1,j],[i+1,j+1],[i-1,j-1],[i+1,j-1],[i-1,j+1]].filter(e=>e[0]>-1&&e[1]>-1&&e[1]<s[i].length)
      t=t.filter(e=>s[e[0]][e[1]]==='*')
      if(t.length)s[i][j]=t.length
    }
  }
  return s.map(e=>e.join``)
}

console.log(board(["+------+",
"| *  * |",
"|  *   |",
"|    * |",
"|   * *|",
"| *  * |",
"|      |",
"+------+"]))