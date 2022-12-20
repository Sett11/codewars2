String.prototype.isUpperCase = function() {
  const newStr = this.replace(/\s/g, '').split('')
     return newStr.every(el => el === el.toUpperCase())
   }