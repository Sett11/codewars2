function makeLooper(s){
    let i=0
    return function(){
        let t=s[i%s.length]
        i+=1
        return t
    }
}
abc = makeLooper('abc')
console.log(abc())
console.log(abc())
console.log(abc())
console.log(abc())