function incrementer(nums) { 
    return nums.map((el,i) => {
        return (''+[el + i + 1]).split('').map(Number)
    }).map(el => el.length > 1 ? el.slice(1): el).flat()
  }
  console.log(incrementer([4, 6, 9, 1, 3]))