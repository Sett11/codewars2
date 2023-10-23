getElement=f=(a,i)=>!i.length?a:f(a[i.shift()],i)

console.log(getElement([[1, 2], [3, 4], [5, 6]], [0,0]))
console.log(getElement([[[ 1, 2, 3]]], [ 0, 0, 1 ]))