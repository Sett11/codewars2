function CaesarCryptoEncode(s,h,a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',f=x=>x.toLowerCase()){
  return !s||!s.match(/[a-z0-9]/i)?'':[...s].map(e=>{
    if(!a.includes(f(e)))return e
    e=[(a.indexOf(f(e))+h)%a.length,e<{}]
    if(e[0]<0)e[0]+=a.length
    e[0]=a[e[0]]
    return e[1]&&e[0].toUpperCase()===e[0]?e[0].toLowerCase():e[1]?e[0].toUpperCase():e[0]
  }).join``
}

console.log(CaesarCryptoEncode("Hw wx, Euxwh?",-3))