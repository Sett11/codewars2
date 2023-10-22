const malwareValidate=a=>[...new Set(a)].filter(e=>e.replace(/[0-9]/g,'').length===5&&e.replace(/[A-z]/g,'').length===5&&e===e.toLowerCase())

console.log(malwareValidate(['asdfiasdfg', "jsdfasdf14", "a212sdf345", "as00yud567", "as34asd567", "agsdgreast", "1dfg23asd4", "hjkjw98076", "fdsqweqrah", "12gh34gh1g"]))