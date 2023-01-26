function isAllPossibilities(x){
  console.log(x)
  if(!x.includes(0)||x.length===0)return false
  if(x[x.length-1]===0)return true
  const arr = [],res = []
  let counter = 1
  while(counter<x[x.length-1]){
    arr.push(counter)
    counter++
  }
  for(let i = 0; i < arr.length; i++){
    res.push(x.includes(arr[i]))
  }
  return res.length===0 ? false : res.every(el=>el===true)
}
console.log(isAllPossibilities([ 3, 2, 1, 0 ]))