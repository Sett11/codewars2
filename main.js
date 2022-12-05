function countRedBeads(n) {
    if(n < 2){
        return 0
    }
    let count = 0
    for(let i = 0; i < n; i++){
        count += 2
    }
    return count -2
  }
  console.log(countRedBeads(3))