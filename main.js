class OnceNamedOne{
    constructor(a,b){
    this.firstName=a
    this.lastName=b
    this.fullName=a+' '+b
    return Object.freeze(this)
    }
}

const n=new OnceNamedOne('John', 'Doe')
n.firstName='hhh'

console.log(n.firstName)
