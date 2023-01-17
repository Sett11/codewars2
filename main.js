function findMissingLetter(a){
  let arr = 'abcdefghijklmnopqrstuvwxyz'
  if(a[0] === a[0].toUpperCase()){
    arr = arr.toUpperCase()
  }
  if(a[0]!==arr[0]){
    const ind = arr.indexOf(a[0])
    arr = arr.slice(ind)
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i]!==a[i]){
      return arr[i]
    }
  }
}
console.log(findMissingLetter(['O','Q','R','S']))