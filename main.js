function zozonacci(p,l){
  if(!p.length||!l)return []
  const o={ 'fib': [0, 0, 0, 1], 'jac': [0, 0, 0, 1], 'pad': [0, 1, 0, 0], 'pel': [0, 0, 0, 1], 'tet': [0, 0, 0, 1], 'tri': [0, 0, 0, 1]}[p[0]].slice(0,l)
  for(let i=0;o.length<l;i++){
    i%=p.length
    if(p[i]==='fib')o.push(o[o.length-1]+o[o.length-2])
    if(p[i]==='jac')o.push(o[o.length-1]+2*o[o.length-2])
    if(p[i]==='pad')o.push(o[o.length-2]+o[o.length-3])
    if(p[i]==='pel')o.push(2*o[o.length-1]+o[o.length-2])
    if(p[i]==='tet')o.push(o[o.length-1]+o[o.length-2]+o[o.length-3]+o[o.length-4])
    if(p[i]==='tri')o.push(o[o.length-1]+o[o.length-2]+o[o.length-3])
  }
  return o
}

console.log(zozonacci(['fib'], 10))
console.log(zozonacci(['tri'], 10))
console.log(zozonacci(['pad'], 10))