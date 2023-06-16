function fisHex(s){
  return eval((s.match(/[abcdef]/gi)||[]).map(e=>parseInt(e,16)).join`^`)||0
}

console.log(fisHex('redlionfish'))