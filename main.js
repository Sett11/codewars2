function rotateClockwise(m,n=m.slice(),a=[]) {
    if(!n.length)return []
    for(let i=0;i<n[0].length;i++){
        let innerArr=[]
        for(let j=0;j<n.length;j++){
            innerArr.push(n[j][i])
        }
        a.push(innerArr)
        innerArr=[]
    }
    return a.map(e=>e.reverse().join``)
}

console.log(rotateClockwise(["abc"]))
console.log(rotateClockwise(['a','b','c']))
console.log(rotateClockwise(["abc", "def"]))
console.log(rotateClockwise([
    "###.....",
    "..###...",
    "....###.",
    ".....###",
    ".....###",
    "....###.",
    "..###...",
    "###.....",
]))
console.log(rotateClockwise(["","",""]))