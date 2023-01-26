function passTheDoorMan (word){
  return [...new Set(word.split``.filter((el,i,arr)=>{
    let firstInd = arr.indexOf(el), nextInd = arr.lastIndexOf(el)
   return firstInd!==nextInd&&Math.abs(firstInd-nextInd)===1
  }))].map(el=>(parseInt(el,36)-9)*3)[0]
}
console.log(passTheDoorMan('lettuce'))