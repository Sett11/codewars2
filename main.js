function shorten(s,l,g='...',r=l-g.length) {
    if(s.length<l)return s
    const res=s.slice(0,Math.floor(r/2))+g+s.slice(-Math.ceil(r/2))
    return res.length>l||res[0]===g[0]||res[res.length-1]===g[0]?s.slice(0,l):res
}

  console.log(shorten("The quick brown fox jumps over the lazy dog",27,'---'))
  console.log(shorten('hello world', 5, '....'))