const array = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32]
let count = 0
const sortArray = (arr)=>{
  for(let i = 0; i< arr.length;i++){
    let indexMin = i
    for(let j = i + 1;j<arr.length; j++){
      if(arr[j] < arr[indexMin]){
        indexMin = j
      }
      count += 1
    }
    let wow = arr[i]
    arr[i] = arr[indexMin]
    arr[indexMin] = wow
  }
  return arr
}
console.log(sortArray(array))
console.log(count)