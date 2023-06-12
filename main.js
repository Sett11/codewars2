class MemoryManager{
    constructor(m){
        this.m=m.fill(0)
        this.o={}
        this.c=1
    }
    allocate(n){
        if(n>=this.m.length||n<0)throw Error()
        let t=this.m.indexOf(0)
        for(let i=t-1;++i<t+n;){
            if(this.m[i]===undefined)throw Error()
            this.m[i]=this.c
        }
        this.c++
        return t
    }
    release(p){
        let t=this.m[p]
        if(!t)throw Error()
        for(let i=p-1;++i<this.m.length;){
            if(this.m[i]===t)this.m[i]=0
            else break
        }
    }
    read(p){
        if(!this.m[p])throw Error()
        if(!this.o[p])return
        return this.m[p]
    }
    write(p,v){
        if(!this.m[p])throw Error()
        this.m[p]=v
        this.o[p]=v
    }
}

let mem = new MemoryManager(new Array(64));
let pointer1 = mem.allocate(32);
let pointer2 = mem.allocate(32);
console.log(mem.release(pointer1))
console.log(mem.m)
console.log(mem.allocate(32))