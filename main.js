palindromize=n=>{
    let z=[...n+''].join``,v=[...z].reverse().join``,c=0
    if(z===v)return `${c} ${n}`
    while(z!==v){
        n+=+v
        z=[...n+''].join``,v=[...z].reverse().join``,c+=1
    }return `${c} ${n}`
}

console.log(palindromize(750))