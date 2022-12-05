function generateShape(integer){
    let arr = []
    for(let i = 0; i < integer; i++){
        arr.push('+')
    }
    arr.push('\n')
    let res = arr.join('').repeat(integer)
    let r = res.split('')
     r.pop()
     return r.join('')
}
console.log(generateShape(5))