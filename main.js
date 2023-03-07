dontGiveMeFive=(s,e,a=[])=>{
  while(s<=e){
    if(![...s+''].includes('5'))a.push(s);s++}
    return a.length
}

console.log(dontGiveMeFive(4,17))