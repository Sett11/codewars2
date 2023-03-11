function center (s,w,f=' ') {
  return s.length>=w?s:f.repeat(Math.ceil((w-s.length)/2))+s+f.repeat(Math.floor((w-s.length)/2))
}
console.log(center("abc", 10, '_'))