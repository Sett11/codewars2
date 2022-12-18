function evenLast(numbers) {
  var sum = 0
    if(numbers.length == 0) return 0
    for(var i=0;i<numbers.length;i++){
      if(i % 2 == 0){
        sum += numbers[i]
      }
    }
  return sum * numbers[numbers.length-1]
}