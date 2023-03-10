checkDigit=(n,i1,i2,d)=>(n+'').slice(Math.min(i1,i2),Math.max(i1,i2)+1).includes(d)

console.log(checkDigit(42793387075989, 6, 0, 8))