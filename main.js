function findRarestPepe(p) {
  p=Object.entries(p.reduce((a,c)=>{
    a[c]=(a[c]||0)+1
    return a
  },{})).sort((a,b)=>a[1]-b[1]),unic=0
  uniq=p[0][1],res=p.filter(e=>e[1]===uniq).map(e=>e[0]).sort()
  return uniq<5&&res.length===1?res.join``:uniq<5&&res.length>1?res:'No rare pepes!'
}
console.log(findRarestPepe(['Donald Trump Pepe',
'Melania Trump Pepe',
'Melania Trump Pepe',
'Clown Pepe',
'Clown Pepe',
'Clown Pepe',
]))