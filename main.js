function shoot(x){
  let Pete=0, Phil=0
  x=x.map(el=>{
    el=[...Object.entries(el[0]),el[1]]
    el[0][1]=el[0][1].split``
    el[1][1]=el[1][1].split``
    return el
  }).map(el=>{
     el[0][1].forEach(e=>e==='X'&&el[2]===true?Pete+=2:e==='X'&&el[2]===false?Pete+=1:null)
     el[1][1].forEach(e=>e==='X'&&el[2]===true?Phil+=2:e==='X'&&el[2]===false?Phil+=1:null)
    return el
  })
  return Pete>Phil?'Pete Wins!':Phil>Pete?'Phil Wins!':'Draw!'
}
console.log(shoot([[{P1:'XX', P2:'XO'}, false], [{P1:'OX', P2:'XX'}, false], [{P1:'OO', P2:'XX'}, true]]))