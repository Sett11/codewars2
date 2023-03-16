fibsFizzBuzz=n=>{
  const a=[1,1]
  if(n===a.length)return a
  if(n===1)return [1]
  for(let i=0;a.length<n;i++)a.push(a[i]+a[i+1])
  return a.map(e=>e%5===0&&e%3===0?'FizzBuzz':e%3===0?'Fizz':e%5===0?'Buzz':e)
}

console.log(fibsFizzBuzz(20))