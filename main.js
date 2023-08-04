Array.prototype.max=function(){
    return this.some(e=>+e!=+e)?NaN:Math.max(...this)
}