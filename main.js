fizzBuzzFactory=a=>
   n=>{
    for(let i=a.length;--i>=0;)if(!(n%a[i][0]))return a[i][1]
    return n+''
  }

const r=fizzBuzzFactory([[2, "Foo"], [4, "Bar"], [6, "FooBar"]])
console.log(r(12))