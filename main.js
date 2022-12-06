function duplicateCount(text){
    const count = text.toLowerCase().split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    }, {})
    return [...Object.values(count)].filter(el => el !== 1).length  
  }
  console.log(duplicateCount("ABBA"))