function woofDecoder(s){
  const a='abcdefghijklmnopqrstuvwxyz'
  s=s.replace(/[^wof\-\!]/gi,'')
  if(!s.match(/[a-z]/i)||!s.match(/w/i)||!s.match(/o/i)||!s.match(/f/i))return "nothing to decode!"
  s=s.split`!`.filter(e=>e).map(e=>e.split`-`.length-1)
  return !s.length?"nothing to decode!":s.some(e=>e>=a.length)?"just barking!":s.map(e=>a[e]).join``
}
console.log(woofDecoder("Shhh! Shhh-shhh!"))