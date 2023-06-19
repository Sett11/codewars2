function dismember(f){
  return f.toString().match(/\(.*\)/g).map(e=>e.replace(/\(|\)/g,''))[0].split`,`.filter(e=>e).map(e=>e.trim())
}

console.log(dismember(function(z,b){return z+b}))
console.log(dismember(function(){return 0}))