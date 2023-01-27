function prLCS (array, x, y, i, j) {
  if(i===0||j===0){
    return ''
  }
  if(x[i-1]===y[j-1]){
    return prLCS(array, x, y, i-1, j-1) + x[i-1]
  }else{
    if(array[i][j-1]>array[i-1][j]){
      return prLCS(array, x, y, i, j-1)
    }else{
      return prLCS(array, x, y, i-1, j)
    }
  }
}

function check (el, x,y){
  const r = new RegExp(el.split``.join`.*`)
  return r.test(x)&&r.test(y)
}

function All (array, x, y, i, j) {
  if(i===0||j===0){
    return new Set([''])
  }else if(x[i-1]===y[j-1]){
    const newSet = new Set()
    All(array, x, y, i-1, j-1).forEach(el=>newSet.add(el+x[i-1]))
    return newSet
  }else{
    const set = new Set()
    if(array[i][j-1]>=array[i-1][j]){
      All(array, x, y, i, j-1).forEach(el=>set.add(el))
    }
    if(array[i-1][j]>=array[i][j-1]){
      All(array, x, y, i-1, j).forEach(el=>set.add(el))
    }
    return set
  }
}

function LCS(x, y) {
  const lenX = x.length, lenY = y.length, arr = [Array(lenY+1).fill(0)]
  for(let i = 1; i <= lenX; i++){
    arr[i] = [0]
    for(let j = 1; j <= lenY; j++){
      if(x[i-1]===y[j-1]){
        arr[i][j] = arr[i-1][j-1]+1
      }else{
        arr[i][j] = Math.max(arr[i-1][j], arr[i][j-1])
      }
    }
  }
  const str = All(arr, x, y, lenX, lenY)
  str.forEach(el=>check(el,x,y))
  return [...str][0]
}


console.log(LCS('132535365', '123456789'))