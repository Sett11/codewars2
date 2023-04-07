function interleave(...a){
    let t=[...a],r=[]
    for(let i=0;i<Math.max(...t.map(e=>e.length));i++){
        let q=[]
        for(let j=0;j<t.length;j++){
            q.push(t[j][i])
        }
        r.push(q),q=[]
    }
    return r.flat(1).map(e=>e===undefined?null:e)
}

  console.log(interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]))