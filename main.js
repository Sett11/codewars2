function seqToOne(n,a=[]){
    if(n>0){
        while(n>1){
            a.push(n)
            n--
        }
        a.push(1)
    }
    if(n<=0){
        while(n<=1){
            a.push(n)
            n++
        }
    }
    return a
}

console.log(seqToOne(10))
console.log(seqToOne(-10))