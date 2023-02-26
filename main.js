function isAValidMessage(m,n=+m[m.length-1]){
  if(typeof n==='number'&&n===n)return false
  m=m.replace(/\d+/g,' $& ').split` `.filter(e=>e).map(e=>+e===+e?+e:e.length)
  for(let i=0;i<m.length-1;i+=2){if(m[i]!==m[i+1])return false}return true
}
console.log(isAValidMessage("4code13hellocodewars"))