function automorphic(n){
  const q = n ** 2
  const newN = (''+n).split('').map(Number)
  const newQ = (''+q).split('').map(Number)
  let total = 0
  if(newQ.length > newN.length){
    total = newQ.length - newN.length
  }
  return newQ.slice(total).join('') === newN.join('') ? 'Automorphic' : 'Not!!'
}
console.log(automorphic(9))
