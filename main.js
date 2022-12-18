function eachCons(array, n) {
  const arr = []
  for(let i = 0; i < array.length; i++){
    let currArr = []
    for(let j = 0; j < n; j++){
      let ind = i + j
      if(ind >= array.length) return arr
      currArr.push(array[ind])
    }
    arr.push(currArr)
  }
  return arr;
}
console.log(eachCons([3, 5, 8, 13], 2));
