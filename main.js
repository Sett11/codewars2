function cookingTime(w){
  let n=Math.ceil((w*1000/450*20+20)/5)*5,m=n/60,k=n%60
  return !w?'There is no chicken!':n<60?`${n} mins`:`${Math.floor(m)} hr${m>=2?'s':''} ${k?k:''} ${k?'mins':''}`.trim()
}

console.log(cookingTime(2.2))
console.log(cookingTime(0.3))
console.log(cookingTime(1))