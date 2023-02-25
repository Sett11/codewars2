const remainder=(D,d,c=d)=>D===0?0:D-c<d?D-c:remainder(D,d,c+d)

console.log(remainder(3,2))
console.log(remainder(10,2))
console.log(remainder(34,7))