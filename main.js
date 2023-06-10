cycle=(x,t=[])=>{
  for(let i=-1;++i<x.length;){
    if(t.includes(x[i]))return [x.indexOf(x[i]),x.indexOf(x[i])+t.length]
    else t.push(x[i])
  }
  return []
}
console.log(cycle([1,2,3,1,2,3]))