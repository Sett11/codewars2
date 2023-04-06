function fight(r1,r2,t){
  let one=r1.speed<r2.speed?r2:r1,two=r1.speed<r2.speed?r1:r2
  for(let i=0;;i++){
    if(one.health<=0)return `${two.name} has won the fight.`
    if(two.health<=0)return `${one.name} has won the fight.`
    if(!one.tactics.length&&!two.tactics.length)break
    if(i%2===0)two.health-=(t[one.tactics.shift()]||0)
    else one.health-=(t[two.tactics.shift()]||0)
  }
  return one.health===two.health?'The fight was a draw.':`${one.health<two.health?two.name:one.name} has won the fight.`
}

console.log(fight({"name": "Rocky", "health": 200, "speed": 20, "tactics": ["punch", "punch", "laser", "missile"] },
{"name": "Missile Bob", "health": 100, "speed": 21, "tactics": ["missile", "missile", "missile", "missile"]},
{"punch": 20, "laser": 30, "missile": 35}))