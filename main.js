function Dog(name, breed, sex, age){
  this.name  = name;
  this.breed = breed;
  this.sex   = sex;
  this.age   = age;
}
Dog.prototype.bark = function(){
  return 'Woof!'
}
const rex = new Dog('Rex', 'tuzik', 'male', 5)
console.log(rex.bark())