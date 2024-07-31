function solve_graph(s,e,a){
  if(s===e)return true
  let b=new Set(a.map(e=>[e['start'],e['end']]).flat()),d={},v=false,u=new Set()
  if(!b.has(s)||!b.has(e))return false
  let set=[...new Set(a.map(e=>[e['start'],e['end']]).flat())]
  for(let i in set){
    if(!d[set[i]])d[set[i]]=[]
    for(let j in a)if(a[j]['start']===set[i])d[set[i]].push(a[j]['end'])
  }
  const f=x=>{
    if(v||!x.length||u.has(x))return
    if(x===e){
      v=true
      return
    }
    u.add(x)
    for(let i in d[x])f(d[x][i])
  }
  for(let i in d)if(i===s)f(i)
  return v
}

console.log(solve_graph('a','b',[
  { start: "a", end: "b" },
]))