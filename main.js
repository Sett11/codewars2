function maxGap (numbers){
  const arr = numbers.sort((a, b) => a - b)
  const arr2 = []
  for(let i = 0; i < arr.length; i++){
    arr2.push(Math.abs(arr[i] - arr[i + 1]))
  }
  const res = arr2.sort((a, b) => b - a)
  return res[0]
}
console.log(maxGap([-7,-42,-809,-14,-12]))