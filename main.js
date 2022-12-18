function lastSurvivor(letters, coords) {
  const arr = letters.split('')
  while(coords.length > 0){
    let tmp = coords.shift()
    arr.splice(tmp, 1)
  }
  return arr[0]
}
console.log(lastSurvivor('abc', [1, 1]))