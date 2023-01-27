function prefixSumsToSuffixSums(a) {
  const arr = []
  arr.push(a.pop())
  for(let i = 0; i < a.length; i++){
    arr.push(arr[0] - a[i])
  } return arr
}
console.log(prefixSumsToSuffixSums([-1, -2, -3, -4, -5]))