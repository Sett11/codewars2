function sumFromString(str){
  return str.replace(/\D/gi, '&').split('&').filter(el => el !== '').map(el => Number(el)).reduce((acc,curr) => acc+curr,0)
}
console.log(sumFromString("In 2015, I want to know how much does iPhone 6+ cost?"))