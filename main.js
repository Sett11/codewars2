function giveChange(amount) {
  const arr = [100,50,20,10,5,1]
  return arr.map((el)=>[el,amount]=[Math.floor(amount/el), amount%el]).map(el=>el[0]).reverse()
}
console.log(giveChange(367))