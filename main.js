class Cylon{
    constructor(m){
  this.model=m
}
attack=function(){
    return "Destroy all humans!"
  }
}
class HumanSkin extends Cylon{
  infiltrate=function(){
    return "Infiltrate the colonies"
  }
}
