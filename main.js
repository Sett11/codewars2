function matrixElementsSum(m) {
  m.push(Array(m[0].length).fill(0))
  for(let i=0;i<m.length-1;i++){
    for(let j=0;j<m[i].length;j++){
      if(m[i][j]===0)m[i+1][j]=0
    }
  }return m.flat().reduce((a,c)=>a+c)
}
console.log(matrixElementsSum(
  [[0]]))