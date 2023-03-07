function fib(n,a=[0,1]) {
  for(let i=0;a.length<=n;i++){
    a.push(a[a.length-2]+a[a.length-1])
  }
  return a[n]
}

console.log(fib(100))