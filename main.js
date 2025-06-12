function find(o, p) {
    let a = p.split`.`.reverse()
    while(a.length){
        let x = a.pop()
        if(!(o.hasOwnProperty(x)))return
        o = o[x]
    }
    return o
}

let object = { 
    user: { 
    name: { 
        first: [1,2,3], 
        last: 'Snow' 
    }
    } 
}
let path = 'user.name.first.1'

console.log(find(object, path))