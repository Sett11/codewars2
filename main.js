Object.prototype.toString=function(){
    return /./.exec(this.valueOf()).input
}
Number.prototype.toString=function(){
    return /./.exec(this.valueOf()).input
}
Boolean.prototype.toString=function(){
    return /./.exec(this.valueOf()).input
}
Array.prototype.toString=function(){
    return JSON.stringify(this.valueOf())
}

console.log([1,2].toString())