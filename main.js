function f(x, cc) {
  cc = Object.values(cc)
  for(let i = 0; i < cc.length; i++){
    if(x===cc[i]){
      x = cc[i+1]
      return x
    }
    if(x===cc[cc.length-1]){
      x = cc[0]
      return x
    }
  }
}
console.log(f(5, { a:3, b:4, c:5 } ))