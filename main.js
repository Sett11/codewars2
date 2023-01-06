function product (s) {
  const str = s.match(/!/g), nextStr = s.match(/\?/g)
  return !str||!nextStr?0: nextStr.length*str.length
}
console.log(product("!????!!!?"))