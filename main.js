function danspower(n,p){
    let r=n**p,k=r%10
    return r%2==0?r:k<5?r-k:r-k+10
  }

  
  console.log(danspower(7,2))