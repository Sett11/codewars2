function solveExpression(exp) {
  console.log(exp)
  if(exp.match(/^0/)||exp.match(/\*\*/)||exp.match(/\+\+/)||!exp.match(/\d/))return -1
  let counter = 0
  while(counter<10){
    let check = exp.replace(/\?/g,counter).replace(/=/, '$&=').replace(/--/, ' - -')
    if(eval(check)&&exp.match(/\d/g).map(Number).indexOf(counter)===-1&&!check.match(/=+00+$/g)&&!check.match(/^00+/g)){
      return counter
    }
    counter++
  }
   return -1
}
console.log(solveExpression('?*123?45=?'))