function treasure(a,x,y){
  let n=a.length,m=a[0].length,r=[],u=new Set()
  const dfs=(i,j,k)=>{
    if(i<0||i>=n||j<0||j>=m||a[i][j]=='X'||u.has([i,j].join`&`))return
    u.add([i,j].join`&`)
    if(![' ','#'].includes(a[i][j])){
      r.push([a[i][j],k])
      return
    }
    k++
    dfs(i+1,j,k)
    dfs(i-1,j,k)
    dfs(i,j+1,k)
    dfs(i,j-1,k)
  }
  dfs(y-1,x-1,0)
  if(!r.length)return 'No treasure found :('
  return `The treasure is ${r.sort((a,b)=>a[1]-b[1])[0][0]} :)`
}

console.log(treasure([
  "XXXX",
  "X XX",
  "X TX",
  "XXXX"
],3,3))