function mergesorted(a,b,c=a.concat(b)) {
  for(let i=0;i<c.length;i++){
    for(let j=i;j<c.length;j++){
      if(c[i]>c[j]){
        let t=c[i]
        c[i]=c[j]
        c[j]=t
      }
    }
  }
  return c
}

console.log(mergesorted([2, 4, 6], [1, 3, 5]))