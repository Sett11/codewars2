function encode(p){
  return p.split` `.map(el=>el.split``.reverse().join``).map(el=>{
    el = el.slice(1) + el.charAt(0)
    return el
  }).join` `
}
console.log(encode("Hello World!"))