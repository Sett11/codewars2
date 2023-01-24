function hexHash(code){
  return code.split``.map(el=>el.charCodeAt().toString(16)).map(el=>el.replace(/\D/g,''))
  .map(el=>el.length>1?el.split``:[el]).join`,`.split`,`.map(Number).reduce((acc,curr)=>acc+curr,0)
}
console.log(hexHash("Yo"))