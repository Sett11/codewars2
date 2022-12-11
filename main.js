function add(x, y) {
  if(x === 0){
    return y
  }
  else if(y === 0){
    return x
  } else{
    const sum = x^y
  const count = (x & y) << 1
  return add(sum, count)
  }
}
console.log(add(23, 17))