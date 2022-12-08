function divCon(x){
  const arr1 = []
  const arr2 = []
  for( let i = 0; i < x.length; i++){
    if(typeof x[i] === 'string'){
      arr1.push(x[i])
    } else{
      arr2.push(x[i])
    }
  }
  return arr2.reduce((acc, curr) => acc + curr, 0) - arr1.reduce((acc, curr) => (+acc) + (+curr), 0)
}
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))