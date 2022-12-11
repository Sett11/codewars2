function jumpingNumber(n){
  const num = (''+n).split('').map(Number)
  if(num.length===1){
    return "Jumping!!"
  }
  const arr = []
  for(let i = 0; i < num.length; i++){
    arr.push(Math.abs(num[i] - num[i+1]))
  }
  return arr.filter(el =>  !Number.isNaN(el)).every((el) => el === 1) ? "Jumping!!" : "Not!!"
}
console.log(jumpingNumber(4643456))