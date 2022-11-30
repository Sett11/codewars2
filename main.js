const cashFunc = (fn) =>{
  const cash = {}
  return function (n) {
    if(cash[n]){
       console.log('From cash', cash[n])
       return cash[n]
    }
    let result = fn(n)
    console.log('From function', result)
    cash[n] = result
    return result
  }
}

const fact = (n) => {
  if(n===1){
    return 1
  }
  return n *= fact(n-1)
}

const cashFact = cashFunc(fact)
cashFact(5)
cashFact(4)
cashFact(4)
cashFact(3)
cashFact(2)
cashFact(5)