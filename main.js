function initializeNames(name){
  const arr = name.split(' ')
  if(arr.length === 1){
    return arr[0]
  }
  if(arr.length === 2){
    return [arr[0] + ' ' + arr[1]].join(' ')
  }
  return arr.map((el, i, arr) => {
    if(i === 0 || i === arr.length-1){
      return el
    }
    el = el.charAt(0) + '.'
    return el
  }).join(' ')
}
console.log(initializeNames('Alice Betty Catherine Davis'))