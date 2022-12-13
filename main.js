function productFib(prod){
  let z = 0
  let v = 1
  while(z*v < prod){
    v = z + v
    z = v - z
  }
  return [z,v, z*v === prod]
}
console.log(productFib(4895))