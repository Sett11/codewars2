function convertFrac(lst){
  let counter = 2, val = true
  while(val){
    if(lst.every(el=>counter%el[1]===0)){
      val = false
    }
    counter++
  }
  return lst.map(el=>[(counter-1)/el[1]*el[0], counter-1]).map(el=>{
      let one = (counter-1)/el[1]*el[0], two = counter-1
      for (let i = 2; i <= two; i++) {
        if (two % i === 0 &&  one % i === 0)
         one /= i, two /= i
        }
        two = two===1?1:counter-1, one = two===1?el[0]/(counter-1):el[0]
        return `(${one},${two})`
    }).join``
}

console.log(convertFrac([ [ 1, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ] ]))
console.log(convertFrac([ [ 69, 130 ], [ 87, 1310 ], [ 3, 4 ] ]))