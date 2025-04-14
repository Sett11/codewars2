function switchLift(els,n){
  let el = Object.entries(els)
  if(n===1){
    let m = Math.min(...el.map(e=>Math.abs(n-e[1])))
    if(!m)return ''
    return el.filter(e=>Math.abs(n-e[1])===m).map(e=>e[0]).join``
  }
  if(n%2===0){
    el = el.filter(e=>e[0]!=='A')
    let m = Math.min(...el.map(e=>Math.abs(n-e[1])))
    if(!m)return ''
    return el.filter(e=>Math.abs(n-e[1])===m).map(e=>e[0]).join``
  }
  el = el.filter(e=>e[0]!=='B')
  let m = Math.min(...el.map(e=>Math.abs(n-e[1])))
  if(!m)return ''
  return el.filter(e=>Math.abs(n-e[1])===m).map(e=>e[0]).join``
}

console.log(switchLift({A:1,B:1,C:10},3))