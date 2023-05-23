function friendFind(a,q=JSON.stringify(['blue','red','blue'].sort()),c=0){
    for(let i=0;i<a.length;i++){
        if(a[i]==='red'){
            let t=[a.slice(i-1,i+2),a.slice(i-2,i+1),a.slice(i,i+3)].filter(e=>JSON.stringify(e.sort())===q)
            if(t.length){
                c++
                a[i]='&'
            }
        }
    }
    return c
}

console.log(friendFind(['blue','red','blue','blue','red','blue','red']))
console.log(friendFind(['blue','blue','red','red','blue','green']))
console.log(friendFind(['red','blue','blue','red']))
