const reverseList=f=h=>{
    let r=[],q=w=[]
    while(h){
        r.push(h[0])
        h=h[1]
    }
    while(r.length){
        w.push(r.pop())
        w.push(r.length?[]:null)
        w=w[1]
    }
    return q.length?q:null
}

console.log(reverseList([1, [2, [3, null]]]))