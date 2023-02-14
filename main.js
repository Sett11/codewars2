function fizzbuzz(n){
    const arr=[]
    for(let i = 1; i <= n; i++){
    arr.push(i)
   }
   return arr.map(e=>e%3===0&&e%5===0?'FizzBuzz':e%3===0?'Fizz':e%5===0?'Buzz':e)
}
console.log(fizzbuzz(10))