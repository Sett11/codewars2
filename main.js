function stantonMeasure (array) {
  const check = array.filter(el=>el===1)
  return array.filter(el=>el===check.length).length
}
console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]))