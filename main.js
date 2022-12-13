function pairs(ar){
  let arr = []
  for(let i = 0; i < Math.ceil(ar.length/2); i++){
    arr.push(ar.slice(i * 2, (i*2) + 2))
  }
  let counter = 0
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][1] - arr[i][0] === 1 || arr[i][0] - arr[i][1] === 1){
        counter += 1
      }
    }
  }
  return counter/2
 }
 console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]))