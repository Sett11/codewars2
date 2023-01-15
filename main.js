function reject(array, predicate) {
  const newArr = array.slice().filter(predicate)
  for(let i = 0; i <array.length; i++){
    if(newArr.indexOf(array[i])!==-1){
      array[i] = '&'
    }
  }
  return array.filter(el=>el!=='&')
}
console.log(reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0))