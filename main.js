function minDistance(n){
    console.log(n)
      const arr=[],res=[]
      for(let i = 1; i < n/2+1; i++){
          if(n%i===0)arr.push(i)
      }
      arr.push(n)
      for(let i = 0; i < arr.length-1; i++){
          res.push(arr[i+1]-arr[i])
      }return Math.min(...res)
  }
console.log(minDistance(17))