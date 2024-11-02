function sum(n){
      return n===undefined?0:function(x){
        return x===undefined?n:sum(x+n)
      }
}

console.log(sum(5)(3)(9)())