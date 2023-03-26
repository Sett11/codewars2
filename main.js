processData=b=>b.reduce((a,c)=>a*(c[0]-c[1]),1)

console.log(processData([[2, 9], [2, 4], [7, 5]]))