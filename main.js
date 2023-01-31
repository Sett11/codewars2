function orderWeight(s) {
  return s.trim().split` `.map(el=>[el, el.split``.map(Number).reduce((a,c)=>a+c,0)])
  .sort((a,b)=>a[1]-b[1]||a[0].localeCompare(b[0])).map(el=>el[0]).join` `
}
console.log(orderWeight("103 123 4444 99 2000"))