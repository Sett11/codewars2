function rowsRearranging(m) {
  n=m.slice().sort((a,b)=>a[0]-b[0]),arr=[],res=[]
  for(let i=0;i<n[0].length;i++){
    for(let j=0;j<n.length;j++){
      arr.push(n[j][i])
    }
  }for(let i=0;i<arr.length;i+=n.length){
    res.push(arr.slice(i,i+n.length))
  }
  for(let i=0;i<res.length;i++){
    for(let j=0;j<res[i].length-1;j++){
      if(res[i][j]>=res[i][j+1])return false
    }
  }return true
}

console.log(rowsRearranging([
  [6,4], 
  [2,2], 
  [4,3]]))
console.log(rowsRearranging([
  [1,3,1], 
  [0,2,0], 
  [1,7,2]]))
console.log(rowsRearranging( [[56,67,-200],
  [86,95,-173],
  [71,87,-180],
  [78,88,-175],
  [63,72,-186],
  [30,44,-220],
  [48,58,-204],
  [92,99,-164],
  [59,70,-195],
  [35,49,-215],
  [69,81,-182],
  [39,54,-206] ]))