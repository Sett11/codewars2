function colorOf(r,g,b){
  let one = (r).toString(16), two = (g).toString(16), three = (b).toString(16)
  if(r<=15){
    one = `0${one}`
  }
  if(g<=15){
    two = `0${two}`
  }
  if(b<=15){
    three = `0${three}`
  }
  return '#' + one + two + three
}

console.log(colorOf(13,178,226))