function winnerOfTrick(a,b){
    const r=['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
    a=a.map((e,i)=>[r.indexOf(e[0]),b[i]]).sort((a,b)=>a[0]-b[0]).filter((e,_,v)=>e[0]===v[0][0])
    return a.length>1?`Tie! (${a.map(e=>e[1]).join`,`})`:a[0][1]+' wins'
}

console.log(winnerOfTrick(["2D", "KH", "QH"],["mZoIs", "GgbA", "S'Lg"]))
console.log(winnerOfTrick(["4D", "2H", "4S"],["GgbA", "mZoIs", "S'Lg"]))