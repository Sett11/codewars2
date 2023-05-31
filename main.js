function simplestProblem(a){
    return a[0].map((_,i)=>a.map(u=>u[i]).map((u,k)=>[u,Math.min(...a[k]),Math.max(...a[k]),i])).filter(e=>e.every(u=>u[0]!==u[2])&&e.filter(u=>u[0]===u[1]).length>a.length/2).map(e=>(e||[]).map(u=>u[3])[0])
}

console.log(simplestProblem([
    [1,1,1,2],
    [5,90,21,40],
    [10,10,9,10],
    [3,4,3,5]
    ]))

console.log(simplestProblem([
    [1,1,1,100],
    [4,4,4,100],
    [5,5,5,100],
    [7,7,7,100]
    ]))

console.log(simplestProblem([
    [1,2,1,1],
    [4,3,3,3],
    [5,5,6,5],
    [7,7,8,8]
    ]))