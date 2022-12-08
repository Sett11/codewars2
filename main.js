function adjacentElementsProduct(array) {
  let arr = []
for(i=0;i<array.length;i++){
  arr.push(array[i] * array[i+1])
}
for(i=array.length;i>0;i--){
  arr.push(array[i-1] * array[i])
}
let result = arr.sort((a,b)=>b-a)
return result[0]
}
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]))