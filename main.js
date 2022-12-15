function dataReverse(data) {
  const arr = []
  const chank = 8
  for(let i = 0; i < data.length; i+= chank){
    arr.push(data.slice(i, i+chank))
  }
  return arr.reverse().flat()
}
console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))