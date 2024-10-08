function burnRope(a,s,c=-1){
  if(a[s[0]][s[1]]!=='R')return c
  let n=a.length,m=a[0].length,g=new Map(),stack=[s]
  for(let i=-1;++i<n;){
    for(let j=-1;++j<m;){
      if(a[i][j]==='R'){
        let t=[[i+1,j],[i-1,j],[i,j+1],[i,j-1]].filter(e=>e[0]>=0&&e[0]<n&&e[1]>=0&&e[1]<m&&a[e[0]][e[1]]==='R')
        g[[i,j]]=t
      }
    }
  }
  while(!a.every(e=>e.every(u=>u!=='R'))){
    c++
    for(let i in stack){
      a[stack[i][0]][stack[i][1]]='F'
      stack=stack.concat(g[stack[i]].filter(e=>a[e[0]][e[1]]==='R'))
    }
  }
  return c
}

console.log(burnRope([
  [" "," "," ","R"," "," "],
  [" "," "," ","R"," "," "],
  [" ","R","R","R","R"," "],
  [" "," "," ","R"," "," "],
  [" "," "," ","R"," "," "],
  [" "," "," ","R"," "," "]
  ],[0,3]))