function duplicateSandwich(a) {
  const arr = []
  for(let i = 0; i < a.length; i++){
    if(a.indexOf(a[i])!==a.lastIndexOf(a[i])){
      arr.push(a.indexOf(a[i]), a.lastIndexOf(a[i]))
      break
    }
  }
  return a.slice(arr[0]+1, arr[1])
}
console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]))