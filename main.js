function sharedBits(a, b) {
    a = (a).toString(2).split``, b = (b).toString(2).split``
    if(a.length!==b.length||b.length<a.length){
        while(a.length!==b.length||b.length<a.length){
            let minL = Math.min(a.length, b.length)
        if(a.length===minL){
            a.unshift('0')
        }
        else{
            b.unshift('0')
        }
        }
    }
    let counter = 0
    for(let i = 0; i<a.length; i++){
        if(a[i]==='1'&&b[i]==='1'){
            counter++
        }
    }
    return counter >= 2
}
console.log(sharedBits(56,7))