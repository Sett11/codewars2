snail=(a,b=[])=>{
    if(a.length<2){
        if(typeof a[0]!=='number'){
            b.push(...a[0])
        }
        if(typeof a[0]==='number'){
            b.push(a[0])
        }
        return b.filter(e=>e)
    }
    if(typeof a[0]!=='number'&&a[0]){
        b.push(...a.shift())
    }
    if(typeof a[0]==='number'){
        b.push(a.shift())
    }
    for(let i=0;i<a.length-1;i++){
        if(typeof a[i]!=='number'){
            b.push(a[i].pop())
        }
        if(typeof a[i]==='number'){
            b.push(a.pop())
        }
    }
    if(typeof a[a.length-1]!=='number'&&a[a.length-1]){
        b.push(...a.pop().reverse())
    }
    if(typeof a[a.length-1]==='number'){
        b.push(...a.pop())
    }
    let innerArr=[]
    for(let i=0;i<a.length;i++){
        if(typeof a[i]!=='number'){
            innerArr.push(a[i].shift())
        }
        if(typeof a[i]==='number'){
            innerArr.push(a.shift())
        }
    }
    if(innerArr.length){
        b.push(...innerArr.reverse())
    }
    return snail(a,b)
}

  console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))