partsSums=a=>{
    let r=[0]
    for(let i in a.reverse()){
        r.push(a[i]+r[i])
    }
    return r.reverse()
}

console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]))