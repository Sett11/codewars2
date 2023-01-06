function climb(n) {
  const arr = []
  while(n>=1){
    arr.push(n)
    n = ~~(n/2)
  }
  return arr.reverse()
}
console.log(climb(10));
