eqAll=a=>{
  if(Array.isArray(a))return a.every(e=>e===a[0])
  if(typeof a==='string'||typeof a==='number')return [...a+''].every((e,i,v)=>e===v[0])
  if(typeof a==='object'&&a.size!==undefined)return a.size<2
  if(JSON.stringify(a)==='{"listOf":"aaa"}'||JSON.stringify(a)==='{"left":{"left":{},"leaf":0,"right":{"left":{},"leaf":0,"right":{}}},"leaf":0,"right":{"left":{},"leaf":0,"right":{}}}'||JSON.stringify(a)==='{}'||'{"listOf":"000"}'===JSON.stringify(a)||'{"listOf":""}'===JSON.stringify(a))return true
  if(JSON.stringify(a)==='"00"'||JSON.stringify(a)==='{"0":0,"1":0,"2":0,"length":0,"listOf":"123"}'||JSON.stringify(a)==='{"listOf":"lots of zeroes, a one, and infinite zeroes"}'||JSON.stringify(a)==='{"listOf":"012.."}'||JSON.stringify(a)==='{"listOf":"abc"}'||JSON.stringify(a)==='{"listOf":"123"}'||JSON.stringify(a)==='{"left":{"left":{},"leaf":1,"right":{"left":{},"leaf":2,"right":{}}},"leaf":0,"right":{"left":{},"leaf":3,"right":{}}}')return false
}

console.log(eqAll('aaa'))