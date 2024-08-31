class Game {
   constructor(name,level){
     this.name=name===true&&name!==''?name:'Player'
     this.level=level===true?0:+level||0
     this.floors=[]
     this.player=new Player(name)
   }
 }
 
 class Player {
   constructor(name) {
     this.name=name&&name!==''&&typeof name==='string'?name:'Player'
     this.health=100
     this.position={x:0,y:0}
     this.damage=10
     this.luck=1.00
   }
 }
 
 class Monster {
   constructor(level) {
   this.level=level
   }
 }
 
 class Map {
   constructor(level) {
   this.level=level
   }
 }