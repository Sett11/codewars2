function createGraph(a){
  const graph={},notDirGraph={}
  for(let i in a){
    if(!graph[a[i].from])graph[a[i].from]={}
    if(!notDirGraph[a[i].from])notDirGraph[a[i].from]={}
    if(!notDirGraph[a[i].to])notDirGraph[a[i].to]={}
    graph[a[i].from][a[i].to]=a[i].drivingTime
    notDirGraph[a[i].from][a[i].to]=a[i].drivingTime
    notDirGraph[a[i].to][a[i].from]=a[i].drivingTime
  }
  return [graph,notDirGraph]
}

function dijkstra(g,s){
  const weight={},deq=[s]
  weight[s]=0
  while(deq.length){
    let v=deq.pop()
    for(let i in g[v]){
      let t=weight[v]+g[v][i]
      if(weight[i]===undefined||weight[i]>t){
        weight[i]=t
        deq.push(i)
      }
    }
  }
  return weight
}

function findPath(d,g,s,e){
  const path=[e]
  while(!path.includes(s)){
    let t=path[path.length-1],n=d[t]
    let r=Object.entries(g[t]).filter(e=>n-e[1]===d[e[0]])
    if(!r.length)break
    path.push(r[0][0])
  }
  return path.reverse().map(e=>+e)
}

function navigate(n,a,s,e){
  const g=createGraph(a),dg=dijkstra(g[0],s)
  if(dg[e]===undefined)return null
  return findPath(dg,g[1],s,e)
}

console.log(navigate(5,[
  {from: 0, to: 1, drivingTime: 5},
  {from: 0, to: 2, drivingTime: 10},
  {from: 1, to: 2, drivingTime: 10},
  {from: 1, to: 3, drivingTime: 2},
  {from: 2, to: 3, drivingTime: 2},
  {from: 2, to: 4, drivingTime: 5},
  {from: 3, to: 2, drivingTime: 2},
  {from: 3, to: 4, drivingTime: 10}
],0,4))