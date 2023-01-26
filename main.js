function sillycase(s) {
  return s.slice(0, Math.ceil(s.length/2)).toLowerCase() + s.slice(Math.ceil(s.length/2)).toUpperCase()
}
console.log(sillycase('brian'))