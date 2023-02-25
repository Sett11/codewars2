function deepReverse(l){
  return l.map(e=>typeof e!=='object'?e:e.length>0&&typeof e==='object'&&e.some(u=>typeof u==='object')?deepReverse(e):e.reverse()).reverse()
}
console.log(deepReverse([[50,51,[52,53]] , [[54,55],56,57]]))