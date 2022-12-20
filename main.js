function roundIt(n){
  const arr = n.toString().split('.').map(el => el.split(''))
  return arr[0].length > arr[1].length ? Math.floor(n) :
  arr[1].length > arr[0].length ? Math.ceil(n) : Math.round(n)
}
console.log(roundIt(34.56))