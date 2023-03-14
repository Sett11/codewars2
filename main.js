function rot13(s) {
  return [...s].map(e=>{
    if(!e.match(/[a-zA-Z]/))return e
    return e.charCodeAt()
  }).map(e=>{
    if(typeof e==='number'&&e>=65&&e<=90){
      e-=13
      if(e<65)e=90-(65-e)+1
      return String.fromCharCode(e)
    }
    if(typeof e==='number'&&e>=97&&e<=122){
      e-=13
      if(e<97)e=122-(97-e)+1
      return String.fromCharCode(e)
    }
    return e
  }).join``
}

console.log(rot13('EBG13 rknzcyr.'))