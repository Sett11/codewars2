function largestRoomArea(a){
  let max=0,n=a.length,m=a[0].length,u=new Set()
  const dfs=(i,j,k=0,q=[])=>{
    if(i<0||i>=n||j<0||j>=m||a[i][j]||u.has([i,j].join`&`))return
      a[i][j]=2
      u.add([i,j].join`&`)
      dfs(i+1,j,k,q)
      dfs(i-1,j,k,q)
      dfs(i,j+1,k,q)
      dfs(i,j-1,k,q)
      a[i][j]=0
  }
  a.forEach((e,i)=>e.forEach((k,j)=>{
    if(!k){
      u=new Set()
      dfs(i,j)
      max=Math.max(max,u.size)
    }
  }))
  return max
}

console.log(largestRoomArea([
  [1,0,0,1,1,1,1,0,1,0], 
  [1,1,1,0,1,1,1,0,1,1], 
  [0,0,1,1,0,1,0,0,0,0], 
  [0,1,0,0,0,0,1,0,1,0], 
  [1,1,1,0,0,0,1,1,0,0], 
  [0,1,0,1,1,0,0,0,0,0], 
  [1,1,1,1,1,1,0,0,0,1], 
  [0,1,0,1,0,0,1,1,1,1], 
  [0,1,0,0,1,1,1,1,1,1], 
  [1,0,1,1,1,0,1,0,1,1]]))

console.log(largestRoomArea([[1,1,1],[1,0,1],[1,1,1]]))