function curry(func,...a){
  function f(...b){
    return func.call(this,...a,...b)
  }
  return f
}

add=(a,b,c)=>a+b+c

addOne=curry(add,1)

console.log(add(1,2,3),addOne(2,3))

let obj = {
  a: 'foo',
  b: function (a) { return this.a + a; }
}

obj.foobar = curry(obj.b, 'bar')
console.log(obj.foobar())