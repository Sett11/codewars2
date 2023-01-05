function listSquared(m, n) {
  const arr = []
  for(let i = m; i <= n; i++){
    arr.push(i)
  }
  return arr.map(el => [el, []]).map((el) => {
    for(let i = 0; i <= el[0]; i++){
      if(el[0]%i===0){
        el[1].push(i)
      }
    }
    return el
  }).map((el) => [el[0], (el[1].map(ul=>ul**2).reduce((acc,curr)=>acc+curr,0))])
  .map((el)=>{
    if(Number.isInteger(Math.sqrt(el[1]))){
      return el
    }
    return 0
  }).filter(el=>el!==0)
}
console.log(listSquared(250,500))