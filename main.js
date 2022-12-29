function toAcronym(inp){
  return inp.split` `.map(el => el[0].toUpperCase()).join``
}
console.log(toAcronym("PHP: Hypertext Preprocessor"))