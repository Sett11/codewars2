for(let i in this){
   if (i.match(/boom\d/)){
     Bomb.CutTheWire(this[i])
   }
 }