const doubleTheValue = function(val) { return val * 2; }
const addOneToTheValue = function(val) { return val + 1; }

const compose=(...n)=>{
    let a=[...n],x=a.shift()
    a.map(e=>x=e(x))
    return x
  }

console.log(compose(5, doubleTheValue, addOneToTheValue))