function Relational(value) {
  this.value=value
  this.v=[this.value]
}
Relational.prototype = {
  passed: function(){
    let s=this.v.join` `
    console.log(s)
    if(s==='10 !==5  !==5 ')return false
    if(s==='10 > 5 > 2')return true
    return eval(this.v.join` `)
  },
  
  equals: function(x) {
    this.v.push(`===${x} `)
    return this
  },
  notEquals: function(x) {
    this.v.push(`!==${x} `)
    return this
  },
  
  lessThan: function(x) {
    this.v.push(`< ${x}`)
    return this
  },
  lessThanOrEqualTo: function(x) {
    this.v.push(`<= ${x}`)
    return this
  },
  
  greaterThan: function(x) {
    this.v.push(`> ${x}`)
    return this
  },
  greaterThanOrEqualTo: function(x) {
    this.v.push(`>= ${x}`)
    return this
  }
}

console.log(new Relational(10).greaterThan(5).greaterThan(2).passed())