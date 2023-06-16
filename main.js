function decypher(s){
  const p={1:['I','l'],2:['R','z'],3:['E','e'],4:['A','a'],5:['S','s'],6:['G','b'],7:['T','t'],8:['B','B'],9:['g','g'],0:['O','o']}
  return [...s].map((e,i,k)=>{
    let v=e.match(/\d/)
    if(!i&&v)return p[e][0]
    if(e==='1'&&k[i-1]===' '&&!(k[i+1]||'').match(/[a-z0-9]/i)||v&&k[i-2]==='.')return p[e][0]
    if(v)return p[e][1]
    return e
  }).join``
}

console.log(decypher("H3110 W0r1d"))
console.log(decypher("1 4m y0ur f47h3r"))
console.log(decypher("1, 1. 1 m34n 13773r 1"))