var regex=/r|z|r2/gi

function isJojo(n){
  n = n.split` `, r = new RegExp('Jo', 'g', 'i'), r2 = ('jo', 'g', 'i'), z = new RegExp('Gio', 'g', 'i')
  return n.every(el=>el.match(r))||n.every(el=>el.match(z))||n.every(el=>el.match(/^jo|jo$/gi))
}
console.log(isJojo("Joseph Joestar"))
console.log(isJojo("Giorno Giovanna" ))
console.log(isJojo('Jotaro Kujo'))