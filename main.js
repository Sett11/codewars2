function driver(data) {
  let one = data[2]
  if(one.length < 5){
    one = one.split('')
    for(let i = one.length; i < 5; i++){
      one.push('9')
    }
    one = one.join('')
  }
  if(one.length > 5){
    one = one.split``
    one.length = 5
    one = one.join``
  }
  const six = data[3][data[3].length - 2]
  let seven =  data[3].slice(3,6) === 'Jan' ? '01' : 
  data[3].slice(3,6) === 'Feb' ? '02' : 
  data[3].slice(3,6) === 'Mar' ? '03' : 
  data[3].slice(3,6) === 'Apr' ? '04' : 
  data[3].slice(3,6) === 'May' ? '05' : 
  data[3].slice(3,6) === 'Jun' ? '06' : 
  data[3].slice(3,6) === 'Jul' ? '07' : 
  data[3].slice(3,6) === 'Aug' ? '08' : 
  data[3].slice(3,6) === 'Sep' ? '09' : 
  data[3].slice(3,6) === 'Oct' ? '10' : 
  data[3].slice(3,6) === 'Nov' ? '11' : 
  data[3].slice(3,6) === 'Dec' ? '12' : null
  if(data[data.length - 1] === 'F'){
    seven = seven.split``.map(Number)
    seven[0] = seven[0] + 5
    seven = seven.join``
  }
  const night = data[3][0] + data[3][1]
  const eleven = data[3][data[3].length-1]
  let twelwe = data[0][0] + data[1][0]
  if(!data[1][0]){
    twelwe = String(data[0][0]) + '9'
  }
  const last = '9AA'
  return `${one.toUpperCase()}${six}${seven}${night}${eleven}${twelwe}${last}`
}
console.log(driver(["Johanna","","Gibbs","13-Dec-1981","F"]))