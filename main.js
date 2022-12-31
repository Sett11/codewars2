function sortByBit(arr) {
  return arr.sort((a,b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b)
}
console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))