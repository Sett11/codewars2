function pyramid(balls) {
  if(balls === 1){
    return 1
  }
  const arr = [], arr2 = []
  let cou = 1
  while(cou <= balls){
    arr.push(cou)
    cou++
  }
  for(let i = 0; i < arr.length; i++){
    arr2.push(arr.slice(arr.length - i))
    if(arr2.flat().length >= balls){
      break
    }
  }
  if(arr2.flat().length > balls){
    return arr2.filter(el => el.length !== 0).length - 1
  }
  return arr2.filter(el => el.length !== 0).length
}
console.log(pyramid(9999))