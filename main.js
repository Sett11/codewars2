const largestArrangement=b=>+b.map(e=>e+'').sort((a,b)=>(b+a)-(a+b)).join(``)

console.log(largestArrangement([8, 6, 590, 70]))
console.log(largestArrangement([4, 50, 8, 145]))
console.log(largestArrangement([4, 40, 7]))
console.log(largestArrangement([6, 73, 79, 356, 7]))