function minimumNumber(numbers){
  const arr = []
  const sum = numbers.reduce((acc, curr) => acc + curr)
  let counter = 2
  while(counter < sum+100){
    arr.push(counter)
    counter++
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        arr[i] = null;
      } else {
        arr[i] = arr[i];
      }
    }
  }
 const newArr = arr.filter(el => el !== null)
 let res = 0
 for(let i = 0; i < newArr.length; i++){
  if(newArr[i] < sum){
    continue
  } else{
    res = newArr[i]
    break
  }
 }
 return res-sum
}
console.log(minimumNumber([2,12,8,4,6]))