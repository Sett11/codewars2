function displayLargeNumber(n){
  let a = [], s = [...(n + '')].reverse().join``, l = s.length
  for(let i = 0;i < l; i += 3)a.push(s.slice(i,i+3))
  return a.map(e => [...e].reverse().join``).reverse().join`,`
}

console.log(displayLargeNumber(3456789123456789))