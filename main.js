class List{
    constructor(...a){
        this.arr=[...a]
        this.length=this.arr.length
        for(let i=0;i<this.arr.length;i++){
            this[i]=this.arr[i]
        }
        return this
    }
    push(...v){
        this.arr.push(...v)
        for(let i=0;i<this.arr.length;i++)this[i]=this.arr[i]
        this.length=this.arr.length
        return this.arr.length
    }
    pop(){
       delete this[this.arr.length-1]
       let t=this.arr.pop()
       this.length=this.arr.length
       return t
    }
    shift(){
        delete this[0]
        let t=this.arr.shift()
        this.length=this.arr.length
        return t
    }
    unshift(...v){
        this.arr.unshift(...v)
        for(let i=0;i<this.arr.length;i++)this[i]=this.arr[i]
        this.length=this.arr.length
        return this.arr.length
    }
    filter(f){
        return this.arr.filter(f) 
    }
}

const r=new List(1,2,3,4)

console.log(r.push(10))
console.log(r.length)
