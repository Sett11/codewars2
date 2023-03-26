function cyclops(n) {
  n=(n).toString(2)
  return [...n.slice(0,~~n.length/2)].every(e=>e==='1')&&[...n.slice(Math.ceil(n.length/2))].every(e=>e==='1')&&n[Math.floor(n.length/2)]==='0'
}

console.log(cyclops(5))