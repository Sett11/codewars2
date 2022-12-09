function extraPerfect(n){
  const arr = []
  for(let i = 1; i <= n; i += 2){
    arr.push(i)
  }
  return arr
}
console.log(extraPerfect(7))