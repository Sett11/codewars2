const deepCompare=(o1, o2)=>{
  console.log(o1,o2)
  if(o1===null||o2===null)return o1===o2
  if(typeof o1!=='object'||typeof o2!=='object'||typeof o1==='boolean'||typeof o2==='boolean')return o1===o2
  if(typeof o1==='object'&&o1.length||typeof o2==='object'&&o2.length)return o1.join``===o2.join``
  const one = Object.entries(o1).flat().sort().join``, two = Object.entries(o2).flat().sort().join``
  return one===two
}
console.log(deepCompare({ name: 'Joe', surname: 'Smith' }, { surname: 'Smith', name: 'Joe' }))