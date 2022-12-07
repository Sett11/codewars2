function giveMeFive(obj){
    const arr = []
    for( let i in obj){
        if(i.length === 5){
            arr.push(i)
        }
        if(obj[i].length === 5){
            arr.push(obj[i])
        }
    }
    return arr
  }
  console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}))