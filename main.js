const sumSquareEvenRootOdd = ns => {
    return parseFloat((ns.map(el => el % 2 === 0 ? el**2 : Math.sqrt(el)).reduce((acc,curr) => acc+curr,0)).toFixed(2))
  }
  console.log(sumSquareEvenRootOdd([1,14,9,8,17,21]))