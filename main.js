function encode(str,key) {
     const obj = {}
     for(let i = 0; i < key.length; i++){
        obj[key[i]] = key[i+1]
        i+=1
     }
     let K = key.toUpperCase()
     for(let i = 0; i < K.length; i++){
        obj[K[i]] = K[i+1]
        i+=1
     }
     const val = Object.entries(obj)
     for(let i = 0; i < val.length; i++){
        obj[val[i][1]] = val[i][0]
     }
     return str.replace(/./g, el=>obj[el]||el)
}

function decode(str,key) {
     return encode(str, key)
}

console.log(decode("Gug hgs g cgt", "gaderypoluki"))