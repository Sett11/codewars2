class Foo{
  constructor(n){
    this.value = n
  }
  valueOf() {
    return this.value;
  }
}

var foo = new Foo(2)
var boo = new Foo(3)

console.log(foo + boo)