function encode(t) {
  return [...t].map(e=>{
    e=[...(e.charCodeAt()).toString(2)]
    while(e.length<8){e.unshift('0')}
    return e.map(u=>u.repeat(3)).join``
  }).join``
}

function decode(b,a=[],c=[]) {
  for(let i=0;i<b.length;i+=3)a.push(b.slice(i,i+3))
  a=a.map(e=>Object.entries([...e].reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{}))).map(e=>{
    if(e.length===1)return e[0][0]
    return e.sort((a,b)=>b[1]-a[1])[0][0]
  })
  for(let i=0;i<a.length;i+=8) c.push(a.slice(i,i+8))
  return c.map(e=>String.fromCharCode(parseInt(e.join``,2))).join``
}

console.log(encode('hey'))
console.log(decode('000111111000111000000000000111111000000111000111000111111111111000000111'))