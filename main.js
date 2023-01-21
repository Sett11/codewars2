function makeParts(ar, chunkSize) {
  const arr = []
  for(let i = 0; i < ar.length; i+=chunkSize){
    arr.push(ar.slice(i, i + chunkSize))
  }
  return arr
}
console.log(makeParts([1,2,3,4,5], 10))