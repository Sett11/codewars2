const addOne = (a) => a + 1
const multTwo = (b) => b * 2

const compose=(...f)=>n=>f.reverse().reduce((a,c)=>c(a),n)

console.log(compose(addOne, multTwo, addOne, addOne)(2))