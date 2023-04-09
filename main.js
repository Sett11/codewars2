function myAuntSally(s,a=s.split` `,r=[]){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a[i].length-1;j++){
            let t=a[i].replace(/[^A-z]/g,'')
            if(t[j]===t[j+1]&&t[j]!==t[j+2]&&t[j]!==t[j-1]){
                r.push(a[i])
            }
        }
    }
    return r.join` `
}

console.log(myAuntSally('walking running swimmming'))