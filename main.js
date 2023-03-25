function insertMissingLetters(c,s=[...c]){
  const a='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split``,r=[],h=[]
  for(let i=0;i<s.length;i++){
    if(h.includes(s[i]))r.push(s[i])
    if(!h.includes(s[i])){
      h.push(s[i])
      r.push(s[i]+a.slice(a.indexOf(s[i].toUpperCase())+1).filter(u=>!s.includes(u.toLowerCase())).join``.replace(s[i],''))
    }
  }
  return r.join``
}
console.log(insertMissingLetters('hello'))  