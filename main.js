function arrayInfo(a){
    return !a.length?'Nothing in the array!':[a.length,a.filter(e=>Number.isInteger(e)).length,a.filter(e=>!Number.isInteger(e)&&typeof e==='number').length,a.filter(e=>typeof e==='string'&&e!==' ').length,a.filter(e=>e===' ').length].map(e=>!e?[null]:[e])
  }

  console.log(arrayInfo([1,2,3.33,4,5.01,'bass','kick',' ']))