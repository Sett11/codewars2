function computeDepth (x){
  const arr = []
  let sum = 0
  for(let i = 1; i < 50; i++){
    sum = String(x*i).split``
    for(let j = 0; j < sum.length; j++){
      if(arr.indexOf(sum[j])===-1){
        arr.push(sum[j])
      }
    }
    if(arr.length===10){
      return i
    }
  }
  return arr
}
console.log(computeDepth(1))