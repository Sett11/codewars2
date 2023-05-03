dataTypes=s=>s.replace(/true|false/gi,' $& ').replace(/[A-z]+|\d+/g,' $& ').toLowerCase().split` `.filter(e=>e).map(e=>e==='true'||e==='false'?'boolean':+e===+e?'number':'string')


  console.log(dataTypes('truestring1'))
  console.log(dataTypes('123gjet'))
  console.log(dataTypes('Youarenumber1'))
  console.log(dataTypes("You are number 1"))