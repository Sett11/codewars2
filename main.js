function uniqueSum(lst){
    return [...new Set(lst)].reduce((acc, curr) => acc + curr, null)
  }