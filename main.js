String.prototype.capitalize=function(){
    if(this[0].charCodeAt()<96)return this.toString()
    return String.fromCharCode(this[0].charCodeAt()-32)+this.slice(1)
}
  
console.log("Hello world".capitalize())  