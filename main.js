function solve(eq){
   return eq.replace(/\D/g,' $& ').split` `.reverse().filter(e=>e!==' ').join``
}
console.log(solve("100*b/y"))