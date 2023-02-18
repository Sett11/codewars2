const squares = n => {
    arr=[],c=1
    while(arr.length<n){arr.push(c**2);c++}
    return arr
}

const range = (n, start, step) => {
    arr=[]
    for(let i=start;;i+=step){
        arr.push(i)
        if(arr.length===n)break
    }
    return arr
}

const random = (n, min, max) => {
    arr=[]
    while(arr.length<=n){arr.push(min-1 + Math.floor(Math.random()*(max+1-min)))}
    return arr
}

const primes = n => {
    let F=(x)=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true},arr=[],c=2
    while(arr.length<n){if(F(c))arr.push(c);c++}return arr
}

console.log(random(4,5,10))
