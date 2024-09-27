function *fack(val,i,f,n){
    if(n!==undefined){
        while(n--){
            yield val
            val=f(val,i)
            i++
        }
    }
    else{
        while(1){
            yield val
            val=f(val,i)
            i++
        }
    }
}

Object.prototype.iterate=function(f,n){
    return fack(this.valueOf(),0,f,n)
}

Object.defineProperty(Object.prototype,'iterate',{enumerable: false,
    configurable: false,
    writable: false,
  })

console.log(Array.from((1).iterate(x=>x+2,3)))