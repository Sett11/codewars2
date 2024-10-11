function playPacMan(a,p){
  let n=a.length,m=a[0].length,l=a.map(e=>e.filter(u=>u==='D').length).reduce((a,c)=>a+c,0),r=[]
  const dfs=(i,j,q)=>{
    if(r.length||i<0||i>=n||j<0||j>=m||!['D','P'].includes(a[i][j]))return
    if(q.length===l){
      r=q.concat([[i,j]])
      return
    }
    if(['D','P'].includes(a[i][j])){
      let t=a[i][j]
      a[i][j]='x'
      dfs(i+1,j,q.concat([[i,j]]))
      dfs(i-1,j,q.concat([[i,j]]))
      dfs(i,j+1,q.concat([[i,j]]))
      dfs(i,j-1,q.concat([[i,j]]))
      a[i][j]=t
    }
  }
  dfs(...p,[])
  return r.length?r:'no solution'
}

console.log(playPacMan([
  ["D","P","D","D","D"],
  ["D","W","D","W","D"],
  ["D","E","D","E","D"],
  ["D","W","D","W","D"],
  ["D","D","D","D","D"]
  ],[0,1]))
console.log(playPacMan([
  ["P","D","D"],
  ["D","W","D"],
  ["D","D","D"]
  ],[0,0]))