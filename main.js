function every(a,s=1,g=0,r=[]){
  for(let i=g;i<a.length;i+=s){
    r.push(a[i])
  }
  return r
}

console.log(every([0,1,2,3,4],2,2))