tourney=a=> {
    a=a.slice()
   let res=[a],c=false
   while(a.length>1){
    let innerArr=[],c='&'
    if(a.length%2!==0)c=a[a.length-1]
    for(let i=0;i<a.length-1;i+=2){
        innerArr.push(Math.max(a[i],a[i+1]))
    }
    if(c!=='&'){
        innerArr.unshift(c)
        c='&'
    }
    res.push(innerArr)
    a=innerArr,innerArr=[]
   }
    return res
}

console.log(tourney([55,13,30,77,47,56,14,17,6,88,55,36,35,34,48,59,18,29,56,65,94,12,36,35,7,4,33,62,25,79,32,85,7,30,49,47,87,53,46]))