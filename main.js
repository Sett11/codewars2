function findSpecialIdx(a){
    let t=0
    for(let i=-1;++i<=100;)t+=i*100
    return (t+42)%100
  }

console.log(findSpecialIdx())