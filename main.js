function getRootProperty(o,v){
 for(let i in o){
  if(JSON.stringify(o[i]).replace(/\d+/g,' $& ').replace(/[^\d ]/g,'').split` `.filter(e=>e).map(Number).includes(v))return i
 }
  return null
}

console.log(getRootProperty({
  "one": {
      "nest1": {
          "val1": [9, 34, 92, 100]
       }
  },
  "2f7": {
      "n1": [10, 92, 53, 71],
      "n2": [82, 34, 6, 19]
  }
},10))