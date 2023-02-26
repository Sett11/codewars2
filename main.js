function trickOrTreat(c,k,j=k.map(e=>e.filter(u=>u==='candy'))){
  return c===k.length&&!k.flat(1).includes('bomb')&&j.every(e=>e.length===j[0].length&&e.length>1)?"Thank you, strange uncle!":"Trick or treat!"
}
console.log(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy","candy"]]))