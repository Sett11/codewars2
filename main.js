function lineIntersections(a, b){
    const u = []
    a = a.map((e, i, v) => [e, b[i]])
    for(let i=-1;++i<a.length;)for(let j=-1;++j<a.length;)if((i !== j) && (a[j][1] >= a[i][0] && a[j][1] <= a[i][1]))!u.find(e => (e[0] == a[i] && e[1] == a[j]) || (e[0] == a[j] && e[1] == a[i]))?u.push([a[i], a[j]]):null
    return u.length
}

console.log(lineIntersections([2,1,2],[10,8,10] ))