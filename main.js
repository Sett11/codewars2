Array.prototype.except = function(){
  const keys=[];[...arguments].map(e=>typeof e!=='object'?[e]:e).forEach(e=>e.forEach(u=>keys.push(u)))
  return this.slice().filter((e,i)=>!keys.includes(i))
}
console.log(['a', 'b', 'c', 'd', 'e'].except([1,3]))