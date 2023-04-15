class Range{
    constructor(a){
        if(!a.includes('..')||typeof a!=='string')throw Error()
        this.a=a
        this.b=this.a.split`..`
        this.c=this.b[0]
        this.d=this.b[1]
        if(this.c===this.d||+this.c>=+this.d||this.c.match(/[A-z]/)&&!this.d.match(/[A-z]/)||!this.c.match(/[A-z]/)&&this.d.match(/[A-z]/))throw Error()
        this.arr=[]
        if(this.c.match(/[0-9]/)){
            this.x=+this.c,this.y=+this.d
            while(this.x<=this.y){
                this.arr.push(this.x)
                this.x+=1
            }
        }
        if(this.c.match(/[A-z]/)){
            if((this.c).charCodeAt()>=(this.d).charCodeAt())throw Error()
            this.arr=Array((this.d).charCodeAt()).fill(1).map((e,i)=>i+(this.c).charCodeAt()).filter(e=>e>=(this.c).charCodeAt()&&e<=(this.d).charCodeAt()).map(e=>String.fromCharCode(e)).filter(e=>e.match(/[A-Za-z]/))
        }
        this.length=this.arr.length
        this.min=typeof this.arr[0]==='number'?Math.min(...this.arr):String.fromCharCode(this.arr.map(e=>(e).charCodeAt()).slice().sort((a,b)=>a-b)[0])
        this.max=typeof this.arr[0]==='number'?Math.max(...this.arr):String.fromCharCode(this.arr.map(e=>(e).charCodeAt()).slice().sort((a,b)=>b-a)[0])
    }
    each(f){
        for(let i=0;i<this.arr.length;i++){
            f(this.arr[i])
        }
    }
    includes(n){
        return this.arr.includes(n)
    }
    toArray(){
        return this.arr
    }
    equals(s){
        return s===this.a
    }
}

const r=new Range('A..Z')

console.log(r.toArray())