function *fibonacciSequence(){
  yield BigInt(1)
  let a=BigInt(1),b=BigInt(1),c=BigInt(0)
  while(1){
    c=b,b+=a,a=c
    yield a
  }
}
const r=fibonacciSequence()
console.log(r.next().value)
console.log(r.next().value)
console.log(r.next().value)
console.log(r.next().value)
console.log(r.next().value)
console.log(r.next().value)
console.log(r.next().value)
console.log(r.next().value)
console.log(r.next().value)
console.log(r.next().value)