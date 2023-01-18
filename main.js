function bestMatch(ALAHLYGoals, zamalekGoals) {
    const arr = []
    for(let i = 0; i < ALAHLYGoals.length; i++){
        arr.push([Math.abs(ALAHLYGoals[i] - zamalekGoals[i]), zamalekGoals[i], i])
    }
    const min = Math.min(...arr)
    const ind = arr.indexOf(min)
    return arr.sort((a,b)=>a[0] - b[0] || b[1] - a[1])[0][2]
}
  console.log(bestMatch([13,7,19,5,14,7,8,9,7,2],[9,2,9,2,10,6,6,7,2,1]))