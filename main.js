function censorThis(t,f) {
 return t.split` `.map(e=>f.includes(e.toLowerCase())?'*'.repeat(e.length):e).join` `
}
console.log(censorThis("The cat does not like the fire",["cat","fire"]))