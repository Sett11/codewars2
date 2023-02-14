function arrange(s) {
    s=s.split` `
    for(let i = 1; i < s.length-1; i++){
        let tmp=''
        if(i%2!==0&&s[i].length<s[i-1].length){
            tmp=s[i]
            s[i]=s[i-1]
            s[i-1]=tmp
            i-=1
        }
        if(i%2===0&&s[i].length>s[i+1].length){
            tmp=s[i+1]
            s[i+1]=s[i]
            s[i]=tmp
        }
        if(i%2!==0&&s[i].length<s[i+1].length){
            tmp=s[i]
            s[i]=s[i+1]
            s[i+1]=tmp
            i-=1
        }
    }
    return s.map((e,i)=>i%2!==0?e.toUpperCase():e.toLowerCase()).join` `
}
console.log(arrange("way the my wall them him"))