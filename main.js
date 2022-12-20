function largest(n,xs){
  const res = xs.sort((a, b) => b-a)
  res.length = n
  return res.reverse()
}
console.log(largest(2,[10,9,8,7,6,5,4,3,2,1]))