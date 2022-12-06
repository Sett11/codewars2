function tidyNumber(n){
  return n === Number((''+n).split('').map(Number).sort((a,b) => a - b).join(''))
}
console.log(tidyNumber(9672))