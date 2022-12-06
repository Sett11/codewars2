function kebabize(str) {
    let newStr = str.replace(/\W/g, '').replace(/[A-Z]/g, ' $&').toLowerCase().replace(/\s/g, '-').replace(/\d/g, '').split('')
     if(newStr[0] === '-'){
        newStr.splice(0, 1)
     }
     return newStr.join('')
  }
  console.log(kebabize('-Qny'))