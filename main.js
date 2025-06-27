function goldMineRace(a, b, c){
    let t = a.map((e, i) => Math.sqrt(Math.abs(c[0] - e[0]) ** 2 + Math.abs(c[1] - e[1]) ** 2) / b[i]), r = t.reduce((a,c) => {
        a[c] = (a[c] || 0) + 1
        return a
    }, {})
    t = t.map((e,i) => [e,i]).filter(e=>r[e[0]] == 1)
    return (r = (t.sort((a, b) => a[0] - b[0])[0] || [])[1]) !== undefined?r:-1
}

console.log(goldMineRace([[6,7],  [-8,-5],  [12,-3],  [-14,5]],[0.73, 0.97, 0.85, 0.88],[1, 2]))
console.log(goldMineRace([[-3,-4],  [3,4],  [-3,4],  [3,-4]],[5, 5, 2, 2],[0, 0]))