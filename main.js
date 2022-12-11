function correctPolishLetters (string) {
  return string.split('').map((el) => {
    if(el === 'ą'){
      el = 'a'
      return el
    }
    if(el === 'ą'){
      el = 'a'
      return el
    }
    if(el === 'ć'){
      el = 'c'
      return el
    }
    if(el === 'ę'){
      el = 'e'
      return el
    }
    if(el === 'ł'){
      el = 'l'
      return el
    }
    if(el === 'ń'){
      el = 'n'
      return el
    }
    if(el === 'ó'){
      el = 'o'
      return el
    }
    if(el === 'ś'){
      el = 's'
      return el
    }
    if(el === 'ź'){
      el = 'z'
      return el
    }
    if(el === 'ż'){
      el = 'z'
      return el
    } else{
      return el
    }
  }).join('')
}
console.log(correctPolishLetters("Jędrzej Błądziński"))