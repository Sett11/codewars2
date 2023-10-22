MyNamespace=MyNamespace||{}

MyNamespace.MyClass=class MyClass{
  constructor(s){
    this.s=s
  }
  sayHello(){return this.s}
}

const m=new MyNamespace.MyClass('Hello!')

console.log(m.sayHello())