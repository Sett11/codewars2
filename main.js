const trueIfValueEqualsIndex = function(v, i) { return v === i; }

const findInArray = (array, iterator) => {
  const arr = []
  for(let i = 0; i < array.length; i++){
    if(iterator(array[i], i)){
      arr.push(i)
    }
  }
  return arr.length===0?-1:arr[0]
}
console.log(findInArray([13,5,3,1,4,5], trueIfValueEqualsIndex))