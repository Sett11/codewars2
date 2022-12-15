const gimme = (triplet) => {
  const arr = triplet.slice().sort((a,b) => a - b)
  return triplet.indexOf(arr[1])
}
console.log(gimme([10.4, 5.9, 14.2]))