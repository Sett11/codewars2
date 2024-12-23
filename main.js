function Warrior(n){
    this.s=n
    this.name=function(n){
      if(n)this.s=n
      return this.s
      }
  }
    
  Warrior.prototype.toString = function(){
      return "Hi! my name's "+this.name();
  }
  