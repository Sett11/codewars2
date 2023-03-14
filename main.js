factorial=(n,c=1)=>n<0?null:n<1?1:n===1?c:factorial(n-1,c*n)

console.log(factorial(5))