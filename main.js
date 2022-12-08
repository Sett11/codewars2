function isPythagoreanTriple(integers) {
  return (integers[0]**2 + integers[1]**2) === integers[2]**2 ? true 
  : (integers[1]**2 + integers[2]**2) === integers[0]**2 ? true :
  (integers[2]**2 + integers[0]**2) === integers[1]**2 ? true : false
}
console.log(isPythagoreanTriple([72, 78, 30]))
console.log(78**2)