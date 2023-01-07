function group(arr) {
  const res = []
  arr.map((el)=>{
    const interArr = []
    arr = arr.filter((ul)=>{
      if(el===ul){
        interArr.push(el)
        return false
      }
      return true
    })
    if(interArr.length > 0){
      res.push(interArr)
    }
  })
  return res
}
console.log(group([12,14,11,14,19,14,19,20,11,13]));
