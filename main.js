function nextVersion(n){
  if(n==='9')return '10'
  v=[...n].reverse()
  for(let i=0;i<v.length;i++){
    if(+v[i]===+v[i]&&+v[i]!==9){
      v[i]=+v[i]+1
      break
    }
    if(+v[i]===+v[i]&&+v[i]==9){
      v[i]=0
    }
  }
  if(n.split`.`.every(e=>+e===0||+e===9||+e===99||+e===999)){
    return (+n.split`.`[0]+1+'')+n.slice(n.indexOf('.')).replace(/9/g,'0')
  }
  return v.reverse().join``
}
console.log(nextVersion("1.2.3"))
console.log(nextVersion('9.9'))
console.log(nextVersion('0.9.9'))
console.log(nextVersion('10.9.9.9.9.9'))
console.log(nextVersion('99.9'))