function genfib(a=[0,1],c=0){
    return function(){
        if(c<2)return a[c++]
        a.push(a[a.length-1]+a[a.length-2])
        return a[a.length-1]
    }
}
const f=genfib()
console.log(f())
console.log(f())
console.log(f())
console.log(f())
console.log(f())
console.log(f())
console.log(f())
console.log(f())