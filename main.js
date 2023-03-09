function rotate(m,d,n=m.slice(),a=[]) {
    for(let i=0;i<n[0].length;i++){
        let innerArr=[]
        for(let j=0;j<n.length;j++){
            innerArr.push(n[j][i])
        }
        a.push(innerArr)
        innerArr=[]
    }
    return d==="counter-clockwise"?a.reverse():a.map(e=>e.reverse())
}

console.log(rotate([[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]],"clockwise"))
