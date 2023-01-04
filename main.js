function matchArrays(v,r){
  let counter = 0
  for(let i = 0; i < v.length; i++){
    if(r.indexOf(v[i]) !== -1){
      counter += 1
    }
  }
  return counter
}