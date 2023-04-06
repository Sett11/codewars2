function battle(a,b){
  for(let i=0;i<Math.min(a.length,b.length);i++){
    if(a[i][0]>=b[i][1]&&b[i][0]>=a[i][1]){a[i]=0,b[i]=0}
    if(a[i][0]>=b[i][1])b[i]=0
    if(b[i][0]>=a[i][1])a[i]=0
  }
  return {'player1':a.filter(e=>e),'player2':b.filter(e=>e)}
}

console.log(battle(
  [[1, 1], [2, 1], [2, 2], [5, 5]],
  [[1, 2], [1, 2], [3, 3]]))