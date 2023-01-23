const maxSequence = function(ar){
  if(ar.length===0)return 0
  const arr = [ar.reduce((acc,curr)=>acc+curr,0)]
  for(let i = 0; i < ar.length; i++){
    let tmp = 0
    for(let j = 1; j < ar.length; j++){
      arr.push(ar.slice(i,ar.length).reduce((acc,curr)=>acc+curr,0))
      tmp = ar.slice(i, j)
      if(tmp.length>0){
        arr.push(tmp.reduce((acc,curr)=>acc+curr,0))
      }
    }
  }
  return Math.max(...arr) < 0 ? 0 : Math.max(...arr)
}
console.log(maxSequence([-45,-44,43,8,-2,5,18,-3,25]))