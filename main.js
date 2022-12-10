function encode(string) {
  return string.split('').map((el) => {
    if(el=== 'a'){
      el = '1'
      return el
    }
    if(el=== 'e'){
      el = '2'
      return el
    }
    if(el=== 'i'){
      el = '3'
      return el
    }
    if(el=== 'o'){
      el = '4'
      return el
    }
    if(el=== 'u'){
      el = '5'
      return el
    } else{
      return el
    }
  }).join('')
}

function decode(string) {
  return string.split('').map((el) => {
    if(el=== '1'){
      el = 'a'
      return el
    }
    if(el=== '2'){
      el = 'e'
      return el
    }
    if(el=== '3'){
      el = 'i'
      return el
    }
    if(el=== '4'){
      el = 'o'
      return el
    }
    if(el=== '5'){
      el = 'u'
      return el
    } else{
      return el
    }
  }).join('')
}
