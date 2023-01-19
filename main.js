class Animal{
    constructor(name, type){
        this.name = name
        this.type = type
        this.toString = function(){
            return `${this.name} is a ${this.type}`
        }
    }
}
let dog = new Animal('Max', 'dog')
console.log(dog.name)
dog.name = 'G'
console.log(dog.name)