function alternate(n, firstValue, secondValue){
  const arr = Array(n).fill(firstValue)
  for(let i = 0; i < arr.length; i++){
    if(i % 2 !== 0){
      arr[i] = secondValue
    }
  }
  return arr
}