const f=x=>{for(let i=1;++i<=Math.sqrt(x);){if(!(x%i))return !1}return !0}
function *r(){
  yield 2
  let c=3
  while(1){
    if(f(c))yield c
    c++
  }
}
primeGen=r()
const r=primeGen()
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())