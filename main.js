class V{
    constructor(s){
        this.s=s
        this.a=[]
    }
    major(){
        this.a.push(this.s.join`.`),this.s[0]+=1,[this.s[1],this.s[2]]=[0,0]
        return this
    }
    minor(){
        this.a.push(this.s.join`.`),this.s[1]+=1,this.s[2]=0
        return this
    }
    patch(){
        this.a.push(this.s.join`.`),this.s[2]+=1
        return this
    }
    rollback(){
        if(!this.a.length)throw Error('Cannot rollback!')
        this.s=this.a.pop().split`.`.map(Number)
        return this
    }
    release(){return this.s.join`.`}
}
const vm=s=>{
    if(!s)s='0.0.1'
    s=s.split`.`.map(Number)
    while(s.length<3)s.push(0)
    if(s.length>3)s=s.slice(0,3)
    if(s.some(e=>!Number.isInteger(+e)))throw Error('Error occured while parsing version!')
    return new V(s)
}

console.log(vm('42.53').major().minor().minor().rollback().rollback().major().rollback().minor().release())