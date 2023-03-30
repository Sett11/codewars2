squareOrSquareRoot=a=>a.map(e=>Number.isInteger(Math.sqrt(e))?Math.sqrt(e):e**2)

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]))