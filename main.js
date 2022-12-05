function mango(quantity, price){
    return Math.floor((quantity - Math.floor(quantity/3)) * price)
  }
console.log(mango(9, 5))  