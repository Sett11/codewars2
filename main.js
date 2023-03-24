function spot(s1,s2,a=[]){
    [...s1].forEach((e,i)=>e!==s2[i]?a.push(i):0)
    return a
  }