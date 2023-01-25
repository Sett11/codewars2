function createMessage(arg, res) {
  if(arg === undefined){
    return res
  }
  res = ((res||0) + ' ' + arg).replace(/0/, '').trim()
  return function(arg){
    return createMessage(arg,res)
  }
}

console.log(createMessage("Hello")("World!")())