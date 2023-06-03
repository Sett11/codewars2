function scramble(s,e,f=x=>[...x].reduce((a,c)=>(a[c]=a[c]+1||1,a),{})){
  s=f(s),e=f(e)
  for(let i in e)if(!s[i]||s[i]<e[i])return !1
  return !0
}

console.log(scramble('rkqodlw','world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('scriptjavx',        'javascript'))
console.log(scramble('katas', 'steak'))