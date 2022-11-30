function billboard(name, price = 30){
  let result = 0
  let count = name.length
   while(count){
    result+=price
    count--
   }
   return result
} 
console.log(billboard("Jeong-Ho Aristotelis"))