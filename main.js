function alternateCase(s) {
    return s.split('').map(el => {
        if(el === el.toUpperCase()){
            el = el.toLowerCase()
            return el
        } else{
            return el.toUpperCase()
        }
    }).join('')
  }
  console.log(alternateCase("ABC"))