const findAll = (array, n) => {
  const arr = []
  for(let i = 0; i < array.length; i++){
    if(array[i] === n){
      arr.push(i)
    }
  }
  return arr
}
console.log(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16))