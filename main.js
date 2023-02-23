function stolenLunch(n) {
  return [...(n+'')].map(e=>{
    if(!e.match(/\w/))return e
    if(typeof +e==='number'&&+e===+e){
      e=String.fromCharCode((+e+97))
      return e
    }
    if(+e!==+e&&(parseInt(e,36)-10)<10){
      e=parseInt(e,36)-10
      return e
    }return e
  }).join``
}
console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"))
console.log(stolenLunch('0123456789'))
console.log(stolenLunch('jihgfedcba'))
console.log(stolenLunch("you won't know!!"))