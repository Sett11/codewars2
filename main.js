function buddy(start, limit) {
  const arr = []
  while (start < limit) {
    let sum = 1, sum2 = 1, check = 0
    for(let i = 2; i < Math.sqrt(start); i++){
      if(start%i===0){
        sum+=i
        sum+=start/i
      }
    }
    if(sum>start){
      check = sum - 1
     for(let j = 2; j < Math.sqrt(check); j++){
      if(check%j===0){
        sum2+=j
        sum2+=check/j
      }
     }
    if (start+1 === sum2 && check+1 === sum) {
      if (start > check) {
        return "Nothing";
      }
      return [start, check];
    } else {
      start++;
    }
    }else{
      start++
    }
  }
  return "Nothing";
}
console.log(buddy(381, 4318));