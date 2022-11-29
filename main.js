
function animal(obj){
  let [values1,values2, values3] = [...Object.values(obj)]
  return `This ${values3} ${values1} has ${values2} legs.`
}
console.log(animal({name:"dog",legs:4,color:"white"}))
