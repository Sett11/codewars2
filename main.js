const createIterator = function(f,n){
  return function(){
    let x=f(...arguments)
    for(let i=0;i<n-1;i++){
      x=f(x)
    }return x
  }
 }
const getDouble = function (n) {
  return n + n;
}
const doubleIterator = createIterator(getDouble,2)
console.log(doubleIterator(5))