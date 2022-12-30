Array.prototype.square = function(){
    return this.slice().map(el => el**2)
  }
  Array.prototype.cube = function(){
    return this.slice().map(el => el**3)
  }
  Array.prototype.average = function(){
    if(this.length === 0) return NaN
    return this.slice().reduce((acc,curr) => acc + curr) / this.length
  }
  Array.prototype.sum = function(){
    return this.slice().reduce((acc,curr) => acc + curr, 0)
  }
  Array.prototype.even = function(){
    return this.slice().filter(el => el % 2 === 0)
  }
  Array.prototype.odd = function(){
    return this.slice().filter(el => el % 2 !== 0)
  }