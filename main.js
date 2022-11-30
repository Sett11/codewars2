const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function searchPath(graph, start, end){
 const cos = {}
 const proc = []
 let neighbors = {}
 Object.keys(graph).map(node=>{
  if(node !== start){
    let value = graph[start][node]
    cos[node] = value || 10000000
  }
 })
 let node = findNodeLowestCost(cos, proc)
 while(node){
  const cost = cos[node]
  neighbors = graph[node]
  Object.keys(neighbors).map(neighbor=>{
    let newCost = cost + neighbors[neighbor]
    if(newCost<cos[neighbor]){
      cos[neighbor] = newCost
    }
  })
  proc.push(node)
  node = findNodeLowestCost(cos, proc)
 }
 return cos
}

function findNodeLowestCost(cos, proc){
  let lowestCost = 10000000
  let lowestNode;
  Object.keys(cos).map(node=>{
    let cost = cos[node]
    if(cost < lowestCost && !proc.includes(node)){
      lowestCost = cost
      lowestNode = node
    }
  })
  return lowestNode
}

console.log(searchPath(graph, 'a', 'g'))
