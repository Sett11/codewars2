function diagonal(matrix){
  let principal = [], secondary = []
  for(let i = 0, j = matrix.length-1; i < matrix.length, j >= 0; i++, j--){
    principal.push(matrix[i][i])
    secondary.push(matrix[i][j])
  }
 secondary = secondary.reduce((acc,curr)=>acc+curr)
 principal = principal.reduce((acc,curr)=>acc+curr)
  return  secondary > principal ? "Secondary Diagonal win!":
  secondary < principal ? "Principal Diagonal win!": 'Draw!'
}

  console.log(diagonal([ 
    [2,2,2],
    [4,2,6],
    [1,8,2] ]))