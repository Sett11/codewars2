x=n=>Array(n).fill(Array(n).fill(0)).map((e,i)=>e.map((u,j)=>i===j||i+j===n-1?1:u))


console.log(x(6))