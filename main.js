const none = (arr, fun) => arr.some(fun) === true ? false : true

console.log(none([1,2,3,4,5],function(item){ return item > 5 }))