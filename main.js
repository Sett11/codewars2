function shiftLeft(s, t){
  if(s===t)return 0
  let counter = 0
  while(s!==t){
    if(s.length>=t.length){
      s=s.slice(1)
      counter++
    }else{
      t=t.slice(1)
      counter++
    }
  }
  return counter
}
console.log(shiftLeft("test", "yes"))