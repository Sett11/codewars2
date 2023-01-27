function suffixSums(a) {
  const arr = []
  for(let i = 0; i < a.length; i++){
    arr.push(a.slice(i).reduce((a,c)=>a+c))
  }
  return arr
}
console.log(suffixSums([1, 2, 3, -6]))