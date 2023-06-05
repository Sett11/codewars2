const alf=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! '()$%&"`
const f=x=>x>{}?x.toUpperCase():x.toLowerCase()
function encrypt(s,r=[]){
  if(!s)return s
  let a=[...s]
  if(a.some(e=>!alf.includes(e)))throw Error()
  a=a.map((e,i)=>i%2?f(e):e)
  for(let i=-1;++i<a.length-1;){
    let t=alf.indexOf(a[i])-alf.indexOf(a[i+1])
    r.push(alf[t<0?t+alf.length:t])
  }
  return [alf[alf.length-alf.indexOf(a[0])-1]].concat(r).join``
}
function decrypt(s){
  if(!s)return s
  let a=[...s]
  if(a.some(e=>!alf.includes(e)))throw Error()
  a[0]=alf[alf.length-alf.indexOf(a[0])-1]
  for(let i=-1;++i<a.length-1;){
    a[i+1]=alf[((alf.indexOf(a[i])-alf.indexOf(a[i+1]))+alf.length)%alf.length]
  }
  return a.map((e,i)=>i%2?f(e):e).join``
}

console.log(encrypt("Business"))
console.log(decrypt("&61kujla"))