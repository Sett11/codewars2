class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
Person.prototype.getName=function(){
    return this.name
}
Object.defineProperty(Person.prototype, 'name', {
    get(){
      return `${this.firstName} ${this.lastName}`
    },
    set(s){
      [this.firstName, this.lastName]=s.split` `
    }
})

let augustusCole = new Person('Augustus', 'Cole')
augustusCole.name='Cole Train'
console.log(c)
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'
console.log(augustusCole)