function maxDiff(list) {
    if(list.length <= 1){
        return 0
    }
    let arr = [...list]
    let sArr = arr.sort((a,b) => b - a)
    return sArr[0] - sArr[sArr.length - 1]
  }
  console.log(maxDiff([1, 2, 3, 4]))