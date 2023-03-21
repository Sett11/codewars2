function flatten(...a) {
    Array.prototype.f=function(d=1){
        const r=[]
        this.forEach(e=>{
            if(Array.isArray(e)&&d>0)r.push(...e.f(d-1))
            else r.push(e)
        })
        return r
    }
    return [...a].f(100)
  }

  console.log(flatten([[[[[1]]]]], ['a', [3,['b']]], null, 5, 'c'))