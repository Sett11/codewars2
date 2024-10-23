function halfIt(s){
    if(typeof s!='string')return ''
    let a=[...s].reduce((a,c)=>{
        if(!a[c])a[c]=0
        a[c]+=1
        return a
    },{}),r=''
    for(let i of s){
        if(a[i]>0){
            r+=i
            a[i]-=2
        }
    }
    return r
}

console.log(halfIt("CcCccccccCcCCcC"))
console.log(halfIt("!!??!!"))