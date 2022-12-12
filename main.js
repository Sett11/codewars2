function twoHighest(arr) {
  const arr1 =  [...new Set(arr)].sort((a,b) => b-a)
  return [arr1[0], arr1[1]].filter(el => el !== undefined)
}
console.log(twoHighest([15]))