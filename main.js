function cakes(r,a,c=10000){
  for(let i in r)c=Math.min(~~(a[i]/r[i]),c)
  return c
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))