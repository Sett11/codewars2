function checkTrip(s,e,d){
  let v='Impossible',u=new Set()
  const dfs=x=>{
    if(u.has(v)||v==='Possible')return
    if(x===e){
      v='Possible'
      return
    }
    u.add(x)
    for(let i in d[x])if(!u.has(d[x][i]))dfs(d[x][i])
  }
  dfs(s)
  return v
}

const links = {"ADL" : ["MEL"], "MEL" : ["ADL", "SYD"],  "SYD" : ["BRI"], "BRI" : [] }
console.log(checkTrip('SYD','ADL',links))