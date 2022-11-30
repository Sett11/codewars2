const array = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32]
let count = 0
const sortArray = (arr)=>{
  if(arr.length <= 1){
    return arr
  }
  let basesElem = Math.floor(arr.length/2)
  let bases = arr[basesElem]
  let little = []
  let big = []
  for(let i = 0; i < arr.length; i++){
    count+=1
    if(i===basesElem){
      continue
    }
    if(arr[i] < bases){
      little.push(arr[i])
    }
    else{
      big.push(arr[i])
    }
  }
  return [...sortArray(little), basesElem, ...sortArray(big)]
}
console.log(sortArray(array))
console.log(count)