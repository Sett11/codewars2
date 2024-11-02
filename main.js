Array.prototype.valueOf=function(){
    return (this.length?this:[0]).reduce((a,c)=>a+c)
}

console.log([1,2,3]+4)