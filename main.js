function rotateAgainstClockwise(m,z,a=[],n=z%4){
  while(n){
    for(let i=0;i<m[0].length;i++){
      let innerArr=[]
      for(let j=0;j<m.length;j++){
        innerArr.push(m[j][i])
      }
      a.push(innerArr);innerArr=[];
    }
    n--;a.reverse();m=a;a=[]
  }
  return m
}

console.log(rotateAgainstClockwise([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]],8))