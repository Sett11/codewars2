function orderWord(s){
  return s? s.split``.sort().join``: 'Invalid String!'
}
console.log(orderWord("Hello, World!"))