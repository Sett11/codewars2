const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function graphSearch(graph, start, end){
  let queue = [start]
  while(queue.length>0){
    const cur = queue.shift()
    if(!graph[cur]){
      graph[cur] = []
    }
    if(graph[cur].includes(end)){
      return true
    }
    else{
      queue = [...queue, ...graph[cur]]
    }
  }
  return false
}

console.log(graphSearch( graph,'a','e'))