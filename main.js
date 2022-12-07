var findDigit = function(num, nth){
    if(nth<=0){
        return -1
    }
      let arr = [num].join('').replace(/-/, '').split('').reverse()
      if(nth>arr.length){
        return 0
      }
      return Number(arr[nth-1])
  }
  console.log(findDigit(-456, 4))