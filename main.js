const fizzBuzzCustom=(s1="Fizz", s2="Buzz", n1=3, n2=5)=>Array(100).fill(1).map((e,i)=>e=i+1).map(e=>e%n1===0&&e%n2===0?s1+s2:e%n1===0?s1:e%n2===0?s2:e)

console.log(fizzBuzzCustom())