reverse = function(array) {
    if(array.length === 0){
        return []
    }
    let arr = []
    for(let i = array.length - 1; i >= 0; i--){
      arr.push(array[i])
    }
    return arr
  }
  console.log(reverse(["two",14,null,1]))