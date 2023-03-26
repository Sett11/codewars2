function minimalSubtractor(n,a=[],i=0,z=n){
      while(!a.filter(e=>e<=1).length){
      n=(n-i)/2
      a.push(n)
    }
     if(a.includes(1))return i
    n=z,i+=1,a=[]
    return minimalSubtractor(n,a,i,z)
}

console.log(minimalSubtractor(14))