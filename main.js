function move_zeros(arrNum, isRight=true){
    return isRight?arrNum.filter(e=>e!==0).concat(arrNum.filter(e=>e===0)):arrNum.filter(e=>e===0).concat(arrNum.filter(e=>e!==0))
  }