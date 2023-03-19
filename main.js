function keywordCipher(s,k){
  let a='abcdefghijklmnopqrstuvwxyz',b=[...new Set(k+a)]
  return [...s.toLowerCase()].map(e=>b[a.indexOf(e)]?b[a.indexOf(e)]:e).join``
}

console.log(keywordCipher("Welcome home","secret"))