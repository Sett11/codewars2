Array.prototype.even = function(){
  return this.filter(el=> typeof el === 'number' && Number.isInteger(el) && el%2===0)
}

Array.prototype.odd = function(){
  return this.filter(el=> typeof el === 'number' && Number.isInteger(el) && el%2!==0)
}

Array.prototype.under = function(x){
  return this.filter(el=> typeof el === 'number' && Number.isInteger(el) && el<x)
}

Array.prototype.over = function(x){
  return this.filter(el=> typeof el === 'number' && Number.isInteger(el) &&el>x)
}

Array.prototype.inRange = function(min,max){
  return this.filter(el=> typeof el === 'number' && Number.isInteger(el) && el>=min&&el<=max)
}
