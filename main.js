function bowlingPins(arr){
  let str = '7 8 9 10\n 4 5 6 \n  2 3  \n   1   '
   arr = arr.map(el=>String(el))
  str = str.split``
  for(let i = 0; i < str.length; i++){
    if(str[i]==='1'&&str[i+1]==='0'){
      str[i] = '10'
      str[i+1] = '&'
    }
  }
  str = str.filter(el=>el!=='&')
  return str.map(el=>{
    if(arr.indexOf(el)!==-1){
      el = ' '
      return el
    }
    if(arr.indexOf(el)===-1&&el!=='\n'&&el!==' '){
      el = 'I'
      return el
    }
    return el
  }).join``
}
console.log(bowlingPins([3,5,9]))