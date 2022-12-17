function insertDash(num) {
  const z = num.toString().split('')
  for(let i = 0; i < z.length; i++){
    if(z[i] % 2 !== 0 && z[i+1]%2!==0){
      z[i] = z[i] + '-'
    }
  }
  const res = z.toString().split('')
  if(res[res.length-1] === '-'){
    res[res.length-1] = '&'
  }
  return res.filter(el => el !== '&').join('').split(',').join('')
}
console.log(insertDash(454793));
