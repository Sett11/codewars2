const removeDuplicateIds = (obj) => {
  const O = {}
  if(Object.entries(obj).length===1){
     Object.entries(obj).map(el=>{
      el[1] = [...new Set(el[1])]
      O[el[0]] = el[1]
      return el
    })
    return O
  }
  const arr = Object.entries(obj).map(el=>{
    el[0] = Number(el[0])
    el[1] = [...new Set(el[1])]
    return el
  }).map((el,i,arr)=>{
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < Math.max(arr[1].length, el[1].length); j++){
        if(el[1].indexOf(arr[i][1][j])===-1&&arr[i][1].indexOf(el[1][j])===-1){
          continue
        }
        if(arr[i][1].includes(el[1][j])){
          if(arr[i][0]>el[0]){
            el[1][j] = '&'
          }
          if(arr[i][0]<el[0]){
            arr[i][1][j] = '&'
          }
        }
      }
    }
    return el
  }).map(el=>{
    el[1] = el[1].filter(ul=>ul!=='&')
    return el
  }).map(el=>{
    O[el[0]] = el[1]
    return el
  })
  return O
}
console.log(removeDuplicateIds({ '22': [ 'Q', 'V', 'B' ] }))