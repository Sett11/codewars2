function Node(value, left, right){
  this.value = value,
  this.left = left;
  this.right = right;
}

function isBalanced(h){
  let d={},r=[],i=0
  const f=x=>{
    if(!x)return
    i++
    if(!d[i])d[i]=[]
    d[i].push(x.left||x.right?'not leaf':'leaf')
    f(x.left)
    f(x.right)
    i--
  }
  f(h)
  for(let i in d)if(d[i].includes('leaf'))r.push(i)
  return Math.max(...r)-Math.min(...r)<2
}

console.log(isBalanced({"value":"a","left":{"value":"b","left":{"value":"e","left":{"value":"g","left":{"value":"h"}}},"right":null},"right":{"value":"c","left":{"value":"f"},"right":null}}))