function validSpacing(s) {
  let res = true
  const arr = s.split('')
  for(let i = 0; i < arr.length; i++){
    if(arr[0] === ' ' || arr[arr.length - 1] === ' ' || arr[i] === ' ' && arr[i+1] === ' '){
      res = false
    }
  }
  return res
}
console.log(validSpacing('Hello world'))