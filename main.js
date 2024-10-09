function playback(map,moves){
  let a=map.split`\n`.map(e=>e.split``),n=a.length,m=a[0].length,u=new Set()
  const dfs=(i,j,curr,col,t=[i,j].join`&`)=>{
    if(i<0||i>=n||j<0||j>=m||a[i][j]!==curr||u.has(t))return
    a[i][j]=col
    u.add(t)
    dfs(i+1,j,curr,col)
    dfs(i-1,j,curr,col)
    dfs(i,j+1,curr,col)
    dfs(i,j-1,curr,col)
  }
  moves.forEach(e=>dfs(e.y,e.x,a[e.y][e.x],e.color+'')||(u=new Set()))
  return a.map(e=>e.join``).join`\n`
}

console.log(playback(
 `31454345324431
  25321322211335
  42521511443315
  12452145444115
  41332151552245
  11215334433555
  51411254115323
  51121252233554
  44555413555231
  11231311413513
  12421125554235
  45353343342455`, [ { x: 2, y: 7, color: 4 },
    { x: 9, y: 3, color: 5 },
    { x: 4, y: 8, color: 4 },
    { x: 10, y: 2, color: 1 },
    { x: 12, y: 1, color: 1 },
    { x: 8, y: 6, color: 4 },
    { x: 6, y: 2, color: 3 },
    { x: 10, y: 5, color: 5 },
    { x: 9, y: 3, color: 4 },
    { x: 1, y: 8, color: 4 } ]))