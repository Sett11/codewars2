function minesweeper(m,r=[]){
  for(let i=-1;++i<m.length;){
    for(let j=-1;++j<m[i].length;){
      let t=[[i,j+1],[i,j-1],[i+1,j],[i-1,j],[i+1,j+1],[i-1,j-1],[i+1,j-1],[i-1,j+1]].filter(e=>e[0]>-1&&e[1]>-1&&e[0]<m.length&&e[1]<m[i].length)
      t=t.filter(e=>m[e[0]][e[1]])
      r.push([i,j,t.length])
    }
  }
  for(let i=-1;++i<r.length;)m[r[i][0]][r[i][1]]=r[i][2]
  return m
}
console.log(minesweeper([
  [true,false,false,true], 
  [false,false,true,false], 
  [true,true,false,true]]))