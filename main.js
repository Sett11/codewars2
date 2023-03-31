function addingShifted(a,s,r=Array(a[0].length+(a.length-1)*s).fill(0)){
  for(let i=0;i<a.length;i++){
    for(let j=0;j<a[0].length;j++)r[j+i*s]+=a[i][j]
  }
  return r
}

console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7],[1, 1, 1, 1, 1, 1]],3))