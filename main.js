function encode(str) {
  let arr = 'abcdefghijklmnopqrstuvwxyz'
  let arr2 = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
  return str.split``.map(el=>{
    for(let i = 0; i < arr.length; i++){
      if(el===arr[i]){
        el = i+1
      }
      else if(el===arr2[i]){
        el = i+1
      }
      continue
    }
    return el
  }).join``
 }
 console.log(encode('abc-#@5'))