function moveZeros(a) {
    const arr=[], zeroArr=[]
    a.forEach(e=>e!==0?arr.push(e):zeroArr.push(e))
    return arr.concat(zeroArr)
}
  console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))