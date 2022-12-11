function datingRange(age){
  if(age>14){
    return `${Math.floor(age/2)+7}-${(age-7)*2}`
  }
  return `${Math.floor(age - 0.10 * age)}-${Math.floor(age + 0.10 * age)}`
}
console.log(datingRange(10))