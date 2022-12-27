function stockList(listOfArt, listOfCat){
  if(listOfArt.length === 0 || listOfCat.length === 0){
    return ''
  }
  const arr = listOfArt.map((el) => {
    el = [el.charAt(0), Number(el.replace(/\D/g, ''))]
    return el
  })
  let nextArr = listOfCat.map(el => [el])
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < nextArr.length; j++){
      if(arr[i][0] === nextArr[j][0]){
        nextArr[j].push(arr[i][1])
      }
    }
  }
  nextArr = nextArr.map(el => el.flat(1))
  for(let i = 0; i < nextArr.length; i++){
    let tmp = []
    for(let j = 0; j < nextArr[i].length; j++){
      if(typeof nextArr[i][j] === 'number'){
        tmp.push(nextArr[i][j])
      }
    }
    tmp = tmp.reduce((acc,curr) => acc+curr,0)
        nextArr[i].push(tmp)
  }
  return nextArr.map((el) => {
    el = `(${el[0]} : ${el[el.length-1]})`
    return el
  }).join(' - ')
}
console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]))