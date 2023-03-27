function transform(s,t,a=[...s],b=[...t],r=[]){
  r.push(s)
  for(let i=0;i<a.length;i++){
    if(a[i]===b[i])continue
    else{
      a[i]=b[i]
      r.push(a.join``)
    }
  }
  return r
}

console.log(transform('kata','math'))