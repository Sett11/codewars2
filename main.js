function compareVersions (v1, v2) {
    console.log(v1,v2)
    const one = v1.replace(/\./g, ' ').split` `.map(Number)
    const two = v2.replace(/\./g, ' ').split` `.map(Number)
    arr=[]
    if(one.length<two.length){
        while(one.length<two.length){
            one.push(0)
        }
    }
    if(two.length<one.length){
        while(two.length<one.length){
            two.push(0)
        }
    }
    for(let i = 0; i < one.length; i++){
        if(one[i]>two[i]){
            return true
        }
        if(one[i]<two[i]){
            return false
        }
        arr.push(one[i]>=two[i])
    }
    return arr.every(el=>el===true)
}
console.log(compareVersions("11", "11"))
console.log(compareVersions("10.4.6", "10.4"))
console.log(compareVersions('81.173.94.150.107.50', '30.93.158.121.155'))