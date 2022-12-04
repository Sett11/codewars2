const isPowerOfTwo = n => n===0 ?  false : (n & (n - 1)) === 0
console.log(isPowerOfTwo(0))