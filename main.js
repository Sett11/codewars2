benford=a=>Array(9).fill(0).map((e,i)=>a.map(e=>(e+'').replace(/[^1-9]/g,'')[0]).filter(z=>z===i+1+'').length/a.length)

console.log(benford([ 1.32, 57.8, 0.009, 111.73 ]))