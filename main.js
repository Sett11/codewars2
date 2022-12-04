function findLongest(array){
    let newArr = []
     array.map(el => newArr.push([el]))
     let s = newArr.map(el => String(el))
      s.sort((a,b) => b.length - a.length)
      return Number(s[0])
  }
  console.log(findLongest([8, 9000, 800]))