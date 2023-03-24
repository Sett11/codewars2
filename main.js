function isCoprime(x,y) {
    for(let i=2;i<Math.min(x+1,y+1);i++)if(x%i===0&&y%i===0)return false
    return true
  }