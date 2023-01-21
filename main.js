function alphabetized(s) {
  return s.replace(/[^a-zA-Z]/g,'').split``.map(el=>{
    if(el === el.toUpperCase()){
      el = [el.toLowerCase(), 1]
      return el
    }
    el = [el.toLowerCase(),0]
    return el
  }).sort((a,b)=>a[0].localeCompare(b[0]))
  .map(el=>{
    if(el[1]===1){
      el = el[0].toUpperCase()
      return el[0]
    }
    return el[0]
  }).join``
}
console.log(alphabetized("The Holy Bible"))