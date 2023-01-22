function digitalRoot(n) {
  n = (n+'').split``.map(Number).reduce((acc,curr)=>acc+curr,0)
  return (n+'').split``.length === 1 ? Number((n+'').split``) : digitalRoot(n)
}
console.log(digitalRoot(456))