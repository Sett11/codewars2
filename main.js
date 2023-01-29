function sc(array){
  const arr = []
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(i!==j){
        arr.push(array[i]+array[j], array[i]-array[j], array[i]*array[j], array[i]/array[j])
      }
    }
  }return Math.max(...arr.filter(el=>el==el&&el!==Infinity&&el!==-Infinity))
}
console.log(sc([1,0]))