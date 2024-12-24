typing=(p,t=typeof p)=>p!==undefined?t+`=${t==='function'?p:JSON.stringify(p)}`:p+''

console.log(typing(1))
console.log(typing(x=>x))
console.log(typing(undefined))