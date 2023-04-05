function isHollow(x){
  if(!x||!x.length||!x.includes(0)||x.join``.replace(/0/g,'X').match(/X+/g).length>1)return false
  x=x.map(e=>e?e:'X')
  return x.slice(0,x.indexOf('X')).length===x.slice(x.lastIndexOf('X')+1).length&&x.filter(e=>e==='X').length>2
}

console.log(isHollow([-1,0,0,0]))