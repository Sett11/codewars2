function avgArray(ar) {
    let arr = [], res = []
    ar.map(el=>el.map((ul,i)=>[ul, i])).map(el=>el.map(ul=>arr.push(ul)))
    arr.sort((a,b)=>a[1]-b[1])
    for(let i = 0; i < arr.length; i+=ar.length){
        res.push(arr.slice(i, i + ar.length))
    }
    return res.map(el=>el.map(ul=>ul[0]).reduce((acc,curr)=>acc+curr,0)/ar.length)
}
console.log(avgArray([[1.2, 8.521, 0.4, 3.14, 1.9], [2, 4.5, 3.75, 0.987, 1.0]]))