function getLargerNumbers(a, b) {
  const arr = []
  for(let i = 0; i < a.length; i++){
    arr.push(Math.max(a[i], b[i]))
  }
  return arr
}