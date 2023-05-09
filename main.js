class Lamp{
  constructor(c,o=false){
    this.color=c
    this.on=o
  }
  state(){
    return `The lamp is ${this.on?'on':'off'}.`
  }
  toggleSwitch(){
    this.on=(this.on?false:true)
  }
}