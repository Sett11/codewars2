class NamedOne{
    constructor(a,b){
    this.firstName=a
    this.lastName=b
    }
    get fullName(){return `${this.firstName} ${this.lastName}`}
    set fullName(s){if(s.includes(' '))[this.firstName,this.lastName]=s.split` ` }
}
const n=new NamedOne('John', 'Doe')

console.log(n.fullName)
