function vowel2index(str) {
  return str.split('').map((el,i) => {
    if(el.toLowerCase() === 'a' || el.toLowerCase() === 'u' || el.toLowerCase() === 'i' || el.toLowerCase() === 'e' || el.toLowerCase() === 'o'){
      el = i + 1
      return el
    } else{
      return el
    }
  }).join('')
}
console.log(vowel2index('this is my string'))