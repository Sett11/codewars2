
function chech(arr){
  const res = []
  for(let i = 0; i<arr.length;i++){
    let count = 0
    for(let j = 0; j < arr.length;j++){
      if(arr[i] === arr[j]){
        count++
      }
    }
    if(count === 1){
      res.push(arr[i])
    }
  }
  return res
}
console.log(chech( [1,1,2,2,3,4,5,5]))