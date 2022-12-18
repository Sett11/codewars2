const arithmeticSequenceElements = (a, r, n) =>
  Array.from({ length: n }, (_, i) => a + r * i).join(', ')

console.log(arithmeticSequenceElements(1,2,5))
