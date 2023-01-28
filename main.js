function nthSmallest() {
  const arr = [...arguments].flat(), check = arr.pop()
  return arr.sort((a,b)=>a-b)[check-1]
}
console.log(nthSmallest([1,5], [2], [4,8,9], 4))