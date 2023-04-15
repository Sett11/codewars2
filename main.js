function orderType(b,a=b.map(e=>typeof e==='number'?[...e+''].length:e.length)){
    return new Set(a).size===1?'Constant':a.slice().sort((a,b)=>a-b).join``===a.join``?'Increasing':a.slice().sort((a,b)=>b-a).join``===a.join``?'Decreasing':'Unsorted'
}

console.log(orderType([[1, 23, 456, 78910], ["abcdef", "ghijklmno", "pqrstuvwxy"], [[1, 23, 456, 78910, ["abcdef", "ghijklmno", "pqrstuvwxy"]], 1234]]))