class F{
    constructor(a=[0,1]){
        this.a=a
    }
    c(){
        this.a.push(this.a[this.a.length-1]+this.a[this.a.length-2])
        return this.a[this.a.length-1]
    }
}
const r=new F()
function *fibonacci(){
    yield 0
    yield 1
    while(1)yield r.c()
}
const fib=fibonacci()
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next().value)