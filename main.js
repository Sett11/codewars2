const myParseInt = str => str.trim().match(/[\D]/) ? NaN : +str

console.log(myParseInt('99'))