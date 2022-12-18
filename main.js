function getMissingElement(s){
  let res = null
  for(let i = 0; i < s.length + 1; i++){
    if(!s.includes(i)){
      res = i
    }
  }
  return res
}
console.log(getMissingElement([0,5,1,3,2,9,7,6,4]))