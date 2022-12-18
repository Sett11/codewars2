function twoDecimalPlaces(number) {
  const arr = (''+number).split('')
  const res = []
  for(let i = 0; i < arr.length; i++){
    res.push(arr[i])
    if(arr[i-2] === '.'){
      break
    }
  }
  return Number(res.join(''))
}
console.log(twoDecimalPlaces(10.1289767789))