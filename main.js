function pairwise(arr, n) {
    const res = []
    for(let i = 0; i<arr.length-1;i++){
      for(let j =i+1; j<arr.length;j++){
        if(arr[i]+arr[j]===n&&!res.includes(i)&&!res.includes(j)){
          res.push(i,j)
          break
          }
      }
    }
    return res.reduce((a,c)=>a+c,0)
  }