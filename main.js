function coinsNeeded(c,ar,a=ar.sort((a,b)=>a-b),s=0){
    for(let i=a.length-1;c;i--){
      while(c>=a[i]){
          let t=Math.floor(c/a[i])
          c-=t*a[i]
          s+=t
      }
    }
    return s
  }

console.log(coinsNeeded(1232,[7,3,1,27]))
console.log(coinsNeeded(6561797970922670,[576,48,24,4,1,192,12]))