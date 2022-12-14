function sevenAte9(str) {
  const newStr = str.split('')
  for(let i = 0; i < newStr.length; i++){
    if(newStr[i] === '9' && newStr[i-1] === '7' && newStr[i+1] === '7'){
      newStr[i] = null
    }
  }
  return newStr.filter(el => el !== null).join('')
}
console.log(sevenAte9('165561786121789797'))