const collatz=(n,count=1)=>n==1?count:collatz(n%2==0?n/2:n*3+1,count+1)

console.log(collatz(22))