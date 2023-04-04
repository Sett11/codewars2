function runoff(a,r=a.map(e=>e[0])){
  console.log(a)
  while(a.length){
    for(let i=0;i<r.length;i++){
      if(r.filter(e=>e===r[i]).length>r.length/2)return r[i]
      if(r.filter(e=>e===r[i]).length===r.length/2&&[...new Set(r)].length===2)return undefined
    }
    a=a.map(e=>e.filter(u=>r.includes(u))).filter(e=>e.length),r=a.map(e=>e[0]),z=Object.entries(r.reduce((a,c)=>{a[c]=(a[c]||0)+1;return a},{})).sort((a,b)=>a[1]-b[1]).filter((e,i,v)=>e[1]===v[0][1]).map(e=>e[0])
    if(z.length===a.map(e=>e[0]).length)return undefined
    a=a.map(e=>e.filter(u=>!z.includes(u)))
  }
  return undefined
}

console.log(runoff([
  ['Abelt Dessler', 'Reinhard von Musel', 'Lex Luthor', 'Drake Luft', 'Brian J. Mason', 'Frank Underwood'],
['Drake Luft', 'Lex Luthor', 'Frank Underwood', 'Brian J. Mason', 'Reinhard von Musel', 'Abelt Dessler'],
['Drake Luft', 'Reinhard von Musel', 'Lex Luthor', 'Frank Underwood', 'Brian J. Mason', 'Abelt Dessler'],
['Lex Luthor', 'Drake Luft', 'Frank Underwood', 'Brian J. Mason', 'Reinhard von Musel', 'Abelt Dessler'],
['Reinhard von Musel', 'Abelt Dessler', 'Drake Luft', 'Lex Luthor', 'Frank Underwood', 'Brian J. Mason'],
['Lex Luthor', 'Brian J. Mason', 'Frank Underwood', 'Abelt Dessler', 'Drake Luft', 'Reinhard von Musel']  ]
))
console.log(runoff(
))