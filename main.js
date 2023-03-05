decimalPlaces=(n,m=n+'',g=m.includes('.')?m.indexOf('.'):m.indexOf('e'),r=m.slice(g).replace(/\./g,''))=>!m.includes('.')&&!m.includes('e')?0:r.replace(/e-\d+/,e=>'0'.repeat(+e.replace(/\D/g,''))).length


  console.log(decimalPlaces(3.14))
  console.log(decimalPlaces(-3.14e-21))
  console.log(decimalPlaces(2.e-14))
  console.log(decimalPlaces(NaN))