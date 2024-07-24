function allLeavesAtSameLevel(h) {
  let d={},i=0
  function f(x){
    if(!x)return
    i++
    if(!d[i])d[i]=[]
    d[i].push(x.getLeft()||x.getRight()?'Not leaf':'Leaf')
    f(x.getLeft())
    f(x.getRight())
    i--
  }
  f(h)
  for(let i in d)if(d[i].includes('Leaf')&&d[i].some(e=>e!=='Leaf'))return false
  return true
}

console.log(allLeavesAtSameLevel())