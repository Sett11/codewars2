beeramid=(b,p,c=1,z=0)=>{
    if(b<p)return 0
    if(b===p)return 1
    while(b>=0){
      if(Number.isInteger(Math.sqrt(c))){
          b-=(c*p)
          z++,c++
      }
      c++
    }
    return z-1
  }

console.log(beeramid(10,2))