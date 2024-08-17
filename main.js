function toInteger(n){
  if(Array.isArray(n))return n.reduce((a,c)=>a+c,0)||0
  if(typeof n==='boolean')return +n
  if((typeof n!=='number'&&typeof n!=='string')||n===Infinity||n===-Infinity||Number.isNaN(n))return 0
  let s=String(+n).split`.`
  return +s[0]
}

console.log(toInteger([]))
console.log(toInteger(80085e-1))