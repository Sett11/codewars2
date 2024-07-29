class Node {
  constructor (value, edges = []) {
    this.value = value;
    this.edges = edges;
  }
}

const E = new Node('E'), D = new Node('D'), C = new Node('C');
		const B = new Node('B', [C, D]);
		const A = new Node('A', [B, C]);

function getRoute(a,b){
  let v=false,u=new Set()
  const f=x=>{
    if(v||!x||u.has(x.value))return
    if(x.value===b.value){
      v=true
      return
    }
    u.add(x.value)
    for(let i in x.edges)f(x.edges[i])
  }
  for(let i in a.edges)f(a.edges[i])
  return v
}

console.log(getRoute(A,C),getRoute(A,B))