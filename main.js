const alf='abcdefghijklmnopqrstuvwxyz'

const f=x=>alf.indexOf(x)
const ff=(x,y=1,k=alf.indexOf(x)+y)=>alf[k>=0?k%26:26-Math.abs(k)]

function encrypt(s=''){
  if(!s||s.length!==9||s.toLowerCase()!==s||[...s].some(e=>!alf.includes(e)))return 'BANG!'
  let a=s.split``
  a[0]=f(a[0])+1,a[2]=f(a[2])+1
  let b=a[3],c=a[5]
  a[5]=b,a[3]=c
  a[6]=ff(a[6]),a[7]=ff(a[7]),a[8]=ff(a[8])
  return a.slice(3,6).concat(a.slice(6)).concat(a.slice(0,3)).join``
}

let validPasscodes = passcodes

function decrypt(s=''){
  if(!s||s.toLowerCase()!==s)return 'BANG!'
  let a=s.slice(6),b=s.slice(0,3),c=s.slice(3,6)
  a=(a.match(/\d+|./g)||[]).map(e=>+e[0]==+e[0]?alf[Math.max(0,+e-1)]:e).join``
  b=[...b].reverse().join``
  c=[...c].map(e=>ff(e,-1)).join``
  r=a+b+c
  return encrypt(r)!=='BANG!'&&validPasscodes.includes(r)?'Nice to meet you, fellow Agent!':'BANG!'
}

console.log(encrypt('jamesbond'))
console.log(decrypt('bsepoe10a13'))
console.log(decrypt('araaaj16a16'))