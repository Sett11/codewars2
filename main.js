function minimumSum(values, n) {
    if(values.length === 0||n===0){
      return 0
    }
       const arr = values.slice().sort((a,b) => a - b)
       arr.length = n
       return arr.reduce((acc,curr) => acc+curr,0)
    }
    
    function maximumSum(values, n) {
       if(values.length === 0||n===0){
      return 0
    }
      const arr = values.slice().sort((a,b) => b - a)
       arr.length = n
       return arr.reduce((acc,curr) => acc+curr,0)
    }
  console.log(minimumSum([5, 4, 3, 2, 1], 2))
  console.log(maximumSum([5, 4, 3, 2, 1], 8))