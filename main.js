function toWeirdCase(s){
 return s.split` `.map(el=>el.split``.map((ul,i)=>i%2===0?ul.toUpperCase():ul.toLowerCase()).join``).join` `
}
console.log(toWeirdCase("Weird string case"))
console.log(toWeirdCase('String'))