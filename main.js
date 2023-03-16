function tiyFizzBuzz(s){
  let r=/a|e|u|o|i/,t=/A|E|U|O|I/
  return [...s].map(e=>e.match(r)?'Yard':e.match(t)?'Iron Yard':e.match(/[a-zA-Z]/)&&!e.match(r)&&!e.match(t)&&e===e.toUpperCase()?'Iron':e).join``
}

console.log(tiyFizzBuzz("Hello WORLD!"))