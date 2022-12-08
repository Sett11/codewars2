function catMouse(x){
  return x.replace(/\w/g, '').length > 3 ? "Escaped!" : "Caught!"
}
console.log(catMouse('C....m'))