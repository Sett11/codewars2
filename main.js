const a='abcdefghijklmnopqrstuvwxyz',b='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function encodeStr(s,h,q=[]){
  let r=s.split` `.map(e=>[...e].map(u=>!u.match(/[a-z]/i)?u:a.includes(u)?a[(a.indexOf(u)+h)%a.length]:b[(b.indexOf(u)+h)%b.length]).join``).join` `
  r=s[0].toLowerCase()+a[a.indexOf(r[0].toLowerCase())]+r
  let l=Math.ceil(r.length/5)
  for(let i=0;i<r.length;i+=l)q.push(r.slice(i,i+l))
  return q
}
function decode(w,o=w[0][0]+w[0][1],h=a.indexOf(o[1])-a.indexOf(o[0])){
  w=w.join``.slice(2)
  return w.split` `.map(e=>[...e].map(u=>{
    if(!u.match(/[a-z]/i))return u
    if(a.includes(u)){
      u=(a.indexOf(u)-h)%a.length
      return u<0?a[u+a.length-1]:a[u]
    }
    if(b.includes(u)){
      u=(b.indexOf(u)-h)%b.length
      return u<0?b[u+b.length-1]:b[u]
    }
  }).join``).join` `
}

console.log(encodeStr("I should have known that you would have a perfect answer for me!!!",1))
console.log(decode([
  'ihH gzud roqdzc lx cqdz',
  'lr tmcdq xntq edds; Sqd',
  'zc rneskx adbztrd xnt s',
  'qdzc nm lx cqdzlr. Vhkk',
  'hzl A Xdzsr (1865-1939)'
]))