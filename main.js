function isVow(a){
  return a.map((el) => {
    const transform = String.fromCharCode(el)
    if(transform === 'a' || transform === 'e' || transform === 'i' || transform === 'o' || transform === 'u'){
      el = transform
      return el
    } else{
      return el
    }
  })
}
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))