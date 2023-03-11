function luckCheck(t){
  return t.replace(/\D/g,'').length!==t.length||!t?Error():[...t.slice(0,Math.floor(t.length/2))].map(Number).reduce((a,c)=>a+c,0)===[...t.slice(Math.ceil(t.length/2))].map(Number).reduce((a,c)=>a+c,0)
}

console.log(luckCheck(''))