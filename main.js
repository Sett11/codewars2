curryPartial=(f,...a)=>f.length<=a.length?f(...a):(...b)=>curryPartial(f,...a,...b)

function add(a,b,c){
  return a+b+c
}
let a=1,b=2,c=3

console.log(curryPartial(add,a)(b)(c))