countIncreasingSequences=(n,m,f=n=>n<=1?1:n*f(n-1))=>n<=m?f(m)/(f(n)*f(m-n)):0

console.log(countIncreasingSequences(3,5))