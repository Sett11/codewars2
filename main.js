function pattern(n){
  if(n<1)return ''
  let str = ``
  for(let i = 0; i <= n; i++){
    if(i%2===0){
      continue
    }
    str+= `${(i+'').repeat(i)}${'\n'}`
  }
  return str.slice(0,str.length-1)
}
 console.log(pattern(9))