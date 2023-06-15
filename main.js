function censor(s){
  return s.split` `.map(e=>e[0]<{}?[...e].map(u=>u<{}&&u.match(/[a-z]/i)?u:'_').join``:e).join` `
}

console.log(censor("Gertrude WENT overboard on the Sailor Jerry..."))