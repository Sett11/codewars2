function sort(initialArray, sortingArray) {
  const arr = []
  for(let i = 0; i < initialArray.length; i++){
    arr.push([initialArray[i], sortingArray[i]])
  }
  return arr.sort((a,b)=>a[1]-b[1]).map(el=>el[0])
}
console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]))