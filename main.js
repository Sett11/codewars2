function calculate(s) {
  return eval(s.replace(/loses/g, '-').replace(/gains/g, '+').replace(/[^0-9-+]/g, ''))
}
console.log(calculate("Panda has 48 apples and loses 4"))