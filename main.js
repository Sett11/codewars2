function nearestSq(n){
  const qr = Math.sqrt(n)
  return qr < Math.floor(Math.sqrt(n)) + 0.5 ? Math.floor(Math.sqrt(n))**2: Math.ceil(Math.sqrt(n))**2
}
console.log(nearestSq(2))