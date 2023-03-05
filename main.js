function howMuchCoffee(e) {
  let c=0
  for(let i=0;i<e.length;i++){
    if(e[i]==='cw')c+=1
    if(e[i]==='CW')c+=2
    if(e[i]==='cat')c+=1
    if(e[i]==='CAT')c+=2
    if(e[i]==='dog')c+=1
    if(e[i]==='DOG')c+=2
    if(e[i]==='movie')c+=1
    if(e[i]==='MOVIE')c+=2
  }
  return c>3?'You need extra sleep':c
}
console.log(howMuchCoffee(['cw','CAT']))