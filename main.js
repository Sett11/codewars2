function sequence(n,p) {
  const a=Array(n).fill(0)
  return typeof p=='function'?a.map(p):a.map(e=>p)
}

console.log(sequence(5,2))
console.log(sequence(5,(i,j)=>j+1))