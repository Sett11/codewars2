function winner(s,j) {
  s=s.map(e=>e=='T'?'10':e=='J'?'11':e=='Q'?'12':e=='K'?'13':e=='A'?'14':e),j=j.map(e=>e=='T'?'10':e=='J'?'11':e=='Q'?'12':e=='K'?'13':e=='A'?'14':e),cs=0,cj=0
  for(let i=0;i<s.length;i++){
    if(+s[i]>+j[i])cs++
    if(+s[i]<+j[i])cj++
  }
  return cs>cj?`Steve wins ${cs} to ${cj}`:cs<cj?`Josh wins ${cj} to ${cs}`:'Tie'
}
console.log(winner(["K","2","4","5","4","3","2","K","A","T"],["Q","3","4","6","4","3","5","A","8","7"]))