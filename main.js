isEven=n=>!!((n&1)^1)
isOdd=n=>!!((n&1)^0)
halfAndFloor=n=>n>>1
isPowerOfTwo=n=>!(n&(n-1))
nthPowerOfTwo=n=>2<<(n-1)||1
truncate=n=>~~n
abs=(n,m=n>>31)=>(n+m)^m

console.log(nthPowerOfTwo(4))
console.log(nthPowerOfTwo(5))
console.log(nthPowerOfTwo(3))