function isTwinPrime(n){
    if(n<=2)return false
      const F = (x) => {
          if(x<2)return false
          if(x===2)return true
          for(let i = 2; i <= Math.sqrt(n); i++){if(x%i===0)return false}return true
      }
      return !F(n)?false:F(n)&&F(n-2)||F(n+2)
  }
  console.log(isTwinPrime(17))