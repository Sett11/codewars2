function ensureQuestion(s) {
 if(s[s.length-1] === '?') return s
const res = s.split('')
res.push('?')
return res.join('')
}
console.log(ensureQuestion("No"))