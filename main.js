function* generator(a,b=0){
  while(1)yield(`${a} x ${++b} = ${a*b}`)
}
const r=generator(1)
console.log(r.next().value)
console.log(r.next().value)
console.log(r.next().value)