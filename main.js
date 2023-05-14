hexStringToRGB=(s,c=s.slice(1).match(/.{2,2}/g).map(e=>parseInt(e,16)),r={r:c[0],g:c[1],b:c[2]})=>r

console.log(hexStringToRGB("#FF9933"))