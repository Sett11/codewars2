function evenNumbers(array, number) {
    return array.filter(el => el%2===0).reverse().slice(0,  number).reverse()
  }
  console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))