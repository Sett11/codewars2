function infiniteLoop(arr,d,n){
  if(d==='left'){
    while(n > 0){
      arr[2].push(arr[0].shift())
      arr[1].push(arr[2].shift())
      arr[0].push(arr[1].shift())
      n--
    }
  }
  if(d==='right'){
    while(n > 0){
      arr[0].unshift(arr[2].pop())
      arr[2].unshift(arr[1].pop())
      arr[1].unshift(arr[0].pop())
      n--
    }
  }
  return arr
}
console.log(infiniteLoop([[1,2,3],[4,5,6],[7,8,9]],"right",1))