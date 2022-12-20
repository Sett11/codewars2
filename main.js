const sumSquares = a => a.reduce((acc, curr) => acc += curr**2, 0)

console.log(sumSquares([7,3,9,6,5]));
