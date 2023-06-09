let addOne = function(e) {return e + 1;}
let square = function(e) {return e * e;}

Function.prototype.pipe=function(f){
  return (function(x){
    return f.apply(null,[this.call(null,x)])
  }).bind(this)
}

console.log([1,2,3,4,5].map(addOne.pipe(square)))