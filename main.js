function loopArr(a,d,s) {
    while(s){
        if(d==='left')a.push(a.shift())
        if(d==='right')a.unshift(a.pop())
        s--
    }
    return a
}

console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2))