function countDifferentMatrices(a){
  const f=x=>{
    let r=[]
    for(let i=0;i<x[0].length;i++){
      let iArr=[]
      for(let j=0;j<x.length;j++)iArr.push(x[j][i])
      r.push(iArr.reverse());iArr=[]
    }
    return r
  }
  a=a.map(e=>[[e.slice(0,2),e.slice(2)]])
  for(let i=0;i<a.length;i++){
    while(a[i].length<5){
      a[i][0]=f(a[i][0])
      a[i].push(a[i][0])
    }
  }
  a=a.map(e=>e.slice(0,e.length-1).map(u=>u.map(z=>z.join``).join``))
  for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
      if(a[j].some(e=>a[i].includes(e))){
        a.splice(j,1);i--;break
      }
    }
  }
  return a.length
}

console.log(countDifferentMatrices(
  [[3, 1, 2, 3],
          [3, 1, 2, 3],
          [1, 3, 3, 2],
          [3, 2, 1, 3]]))
console.log(countDifferentMatrices(
  [[1, 2, 2, 1],
           [1, 1, 2, 2],
           [2, 1, 1, 2],
           [2, 1, 2, 1],
           [1, 2, 1, 2]]))