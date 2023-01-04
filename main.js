function catMouse(x, j) {
  if (x.indexOf("C") === -1||x.indexOf("m") === -1||x.indexOf("D") === -1)return "boring without all three";
  const cat = x.indexOf('C')
  const mouse = x.indexOf('m')
  const dog = x.indexOf('D')
  if(Math.abs(cat - mouse) > j)return 'Escaped!'
 
 if(x.replace(/\./g,'') === 'CDm' || x.replace(/\./g,'') === 'mDC')return 'Protected!'
 return "Caught!"
}
console.log(catMouse('m.D.C.',3));