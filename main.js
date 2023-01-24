function minimum(a, x) {
  if(a===x)return 0
  let counter = 1
  while(a%x!==0){
    if((a+counter)%x===0||(a-counter)%x===0){
      break
    }
    counter++
  }
  return counter
}
console.log(minimum(10,6))