function pak(s){
  if(!s.match(/[a-zA-Z]/g))return ''
  return s.split` `.join` pak `
}
console.log(pak('Man I need a taxi up to Ubud'))