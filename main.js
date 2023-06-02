function partitionOn(p,a,f=[],t=[]){
  for(let i=-1;++i<a.length;){
    if(!p(a[i]))f.push(...a.splice(i,1)),i--
    else t.push(...a.splice(i,1)),i--
  }
  a.splice(0,0,...f,...t)
  return f.length
}

console.log(partitionOn(e=>!(e&1),[1, 2, 3, 4, 5, 6]))