function tripleX(str){
  const first = str.indexOf('x')
  return str[first] === 'x' && str[first + 1] === 'x' && str[first + 2] === 'x'
}
console.log(tripleX("kittywarmxx"));
