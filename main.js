function convert(number){
    const arr = []
    for(let i = 0; i < number.length; i+= 2){
        arr.push(number.slice(i, i+2))
    }
    return arr.map(el=>String.fromCharCode(el)).join``
}
  console.log(convert("656667"))