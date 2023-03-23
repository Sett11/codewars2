function plant(s,w,f,t){
 let r=('-'.repeat(w)+s.repeat(f)).repeat(w)
 return t>19&&t<31?r:r.replace(/./g,e=>e===s?'':e)+s
}

console.log(plant("#", 10, 2, 15))