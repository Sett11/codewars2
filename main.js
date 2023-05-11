sum=(x,y)=>x+y
double=x=>sum(x,x)
minus=(x,y)=>x-y
addOne=x=>sum(x,1)

function chain(f){
    class W{
        constructor(x){
            this.x=x
        }
        execute(){
            return this.x
        }
    }
    Object.keys(f).forEach(e=>{
        let t=f[e]
        W.prototype[e]=function(){
            let b=[].slice.call(arguments)
            if(this.x!=null)b.unshift(this.x)
            let y=t.apply(null,b)
            return new W(y)
        }
    })
    return new W()
}

const c=chain({sum, minus, double, addOne})
console.log(c.sum(1,2).execute())