function factory(x){
  return function(arr){
    return arr.map(el=>el*x)
  }
}