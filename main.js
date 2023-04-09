sumNestedNumbers=(a,f=(x,c=1)=>x.map(e=>!Array.isArray(e)?e**c:f(e,c+1)))=>f(a).flat(10).reduce((a,c)=>a+c,0)

console.log(sumNestedNumbers([1, [2], 3, [4, [5]]]))