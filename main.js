function reverseOnDiagonals(a,r=a.length,l=~~(r/2),c=2){
while(c){
  for(let i=0;i<l;i++){
    for(let j=0;j<l;j++){
      if(i===j){
        let t=a[i][j]
        a[i][j]=a[r-i-1][r-j-1]
        a[r-i-1][r-j-1]=t
      }
    }
  }
  a=a.map(e=>e.reverse());c--
}
  return a
}

console.log(reverseOnDiagonals([
  [1,2,3],
  [4,5,6],
  [7,8,9]]))
console.log(reverseOnDiagonals([
  [43,455,32,103],
  [102,988,298,981],
  [309,21,53,64],
  [2,22,35,291]]))