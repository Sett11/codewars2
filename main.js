isPrime=x=(z,n=Math.abs(z),m=Math.sqrt(n)+1,i=2)=>n<2||n%i===0?!1:n===2||i>m?!0:x(z,n,m,i+1)

console.log(isPrime(-7))