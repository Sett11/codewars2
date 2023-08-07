class Singleton{
    constructor(){
        if(Singleton.__instance)return Singleton.__instance
        Singleton.__instance=this
    }
}
let o=new Singleton()
let r=new Singleton()
console.log(o===r)