function stringExpansion(s) {
  if(!s.match(/[\d]/)){
    return s
  }
  s=1+s
  const arr = s.match(/\d[a-zA-Z]+/g)
  if(arr===null){
    return ''
  }
  let str = ''
  for(let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr[i].length; j++){
      str+=arr[i][j].repeat(arr[i][0])
    }
  }
  return str
}
console.log(stringExpansion('0d0a0v0t0y'))