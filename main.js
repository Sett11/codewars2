extend=(...n)=>{
    let r=[],o={},a=[...n].filter(e=>isObject(e)).map(e=>Object.entries(e).map(u=>r.push(u)))
    r.forEach(e=>o[e[0]]===undefined?o[e[0]]=e[1]:null)
    return o
}

console.log(extend({ a: 1, b: 2, length: 6 }, [], 'nope', false, [Function], { c: 3, a: 3 }))