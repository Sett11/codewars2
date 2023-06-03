function* sequenceGen(...a){
  const f=x=>x===undefined?1:x
  let c=0
  while(c<a.length)yield a[c++]
  while(1){
    a.push(a.slice(-c).reduce((a,c)=>a+c,0))
    yield f(a[a.length-1])
  }
}
const fib=sequenceGen(0,1)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)