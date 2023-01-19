function solve(s){
    if(s.length===0||s.length===1)return 0

    let d = Math.floor(s.length / 2), first = s.slice(0,d), last = s.slice(d+1)
    const arr1 = [], arr2 = [], res = []
    if(s.length%2===0){
        first=s.slice(0,s.length/2)
        last = s.slice(s.length/2)
    }
    for(let i = 0; i < first.length; i++){
        arr1.push(first.slice(0, first.length-i))
        arr2.push(last.slice(i))
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i]===arr2[i]){
            res.push(arr1[i].length)
        }
    }
    return res.length===0?0:res[0]
}
console.log(solve('abcdabc'))