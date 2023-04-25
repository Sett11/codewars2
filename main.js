function noOrder(s){
  s=s.replace(/ /g,'').replace(/\-\-/g,'+')
  if(s.match(/\d+%0|\d+\/0/))return null
  if(!s.match(/[^\d]/))return Math.floor(+s)
  if(s.replace(/[\d\.]/g,'').length===1||s.replace(/[\d\.]/g,'').length===2&&s[0]==='-')return Math.floor(eval(s.replace(/\^/g,'**')))
  let c=0
  for(let i=1;i<s.length;i++){
    if(!s[i].match(/[\.\d]/))c++
    if(c===2){
      s=Math.floor(eval(s.slice(0,i).replace(/\^/g,'**')))+s.slice(i)
      break
    }
  }
  return noOrder(s)
}

console.log(noOrder("7 *  3 - 3/  10  0"))
console.log(noOrder("0.037037037037037035-39+82-35/19+61-61+11/98+31*83-91*2*61-86-92-61/96/27/51"))
console.log(noOrder('111.22222222222221+38'))