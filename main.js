function workOnStrings(a,b){
  let newA = a.split``, newB = b.split``
  for(let i = 0; i < newA.length; i++){
    let counter = 0, tmp = newA[i]
    for(let j = 0; j < newB.length; j++){
      if(tmp.toLowerCase()===newB[j].toLowerCase()){
        counter++
      }
    }
    newA[i] = [tmp, counter]
  }
  for(let i = 0; i < newB.length; i++){
    let counter = 0, tmp = newB[i]
    for(let j = 0; j < a.length; j++){
      if(tmp.toLowerCase()===a[j].toLowerCase()){
        counter++
      }
    }
    newB[i] = [tmp, counter]
  }
  const res = newA.map(el=>{
    if(el[1]!==0){
      let counter = el[1]
      while(counter>0){
        if(el[0]===el[0].toLowerCase()){
          el[0] = el[0].toUpperCase()
          
        }else{
          el[0] = el[0].toLowerCase()
        }
        counter--
      }
      return el[0]
    }
    return el[0]
  })
  const res2 = newB.map(el=>{
    if(el[1]!==0){
      let counter = el[1]
      while(counter>0){
        if(el[0]===el[0].toLowerCase()){
          el[0] = el[0].toUpperCase()
          
        }else{
          el[0] = el[0].toLowerCase()
        }
        counter--
      }
      return el[0]
    }
    return el[0]
  })
  return res.join`` + res2.join``
}
console.log(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe"))