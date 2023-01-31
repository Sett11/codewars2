function smaller(n) {
  arr=[]
  for(let i = 0; i < n.length; i++){
    let counter = 0, tmp = n[i]
    for(let j = i; j < n.length; j++){
      if(n[j]<tmp){
        counter++
      }
    }
    arr.push(counter)
  }
  return arr
}
  console.log(smaller([1,2,0]))