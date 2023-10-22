function rank(c) {
  let r=+c.replace(/\D/g,''),o={'T':10,'J':11,'Q':12,'K':13,'A':14}
  if(c.match(/\d/))return r>1&&r<15?r:0
  return o[c[0]]||0
}

console.log(rank('Th'))
console.log(rank('6i'))