function oddOne(arr) {
  const ar = []
  for(let i = 0 ; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      ar.push(i)
    }
  }
  return ar[0] === undefined ? -1 : ar[0]
}
console.log(oddOne([2,4,6,7,10]))