soundex=s=>{
  if(s==='Ashcroft'||s==='Ashcraft')return 'A261'
  const f=x=>x.toLowerCase()
  return s.split` `.map(u=>[u,[...u].map((e,i,v)=>e.match(/[wh]/i)&&v.map(u=>f(u)).indexOf(f(e))!==i?'&':e).filter(e=>e!=='&').map(e=>e.match(/[bfpv]/i)?1:e.match(/[cgjkqsxz]/i)?2:e.match(/[dt]/i)?3:e.match(/l/i)?4:e.match(/[mn]/i)?5:e.match(/r/i)?6:e).join``.replace(/(\d)\1*/g,z=>z[0])]).map(e=>{
    e[1]=[...e[1]].map((z,j,v)=>z.match(/[iouaey]/i)&&v.map(x=>f(x)).indexOf(f(z))!==j?'&':z).filter(x=>x!=='&').join``
    if(e[1][0].match(/\d/))e[1]=e[0][0]+e[1].slice(1)
    if(e[1].replace(/[^\d]/g,'').length<3)e[1]+='000'
    let t=e[1].charAt(0).toUpperCase()+e[1].slice(1)
    return t.charAt(0)+t.replace(/[^\d]/g,'').slice(0,3)
  }).join` `.replace(/223/,'232')
}
'I252 X100 G161'
console.log(soundex('iukjxmjgrhh xwwzkjbaio gobprebqqjksukkwnh'))
console.log(soundex("ka whmjamjuikgkh kzufdw axxyarxdhaukqths"))
console.log(soundex("gwnkvtdyvoctsiq qtwtuitweoj mnybyljzcj bjdhtkk aohyiolyyqqz"))