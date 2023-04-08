function sort(s,a=[],b=[]){
    s=s.replace(/[^a-z ]/gi,'').split` `
    s.forEach(e=>e[0]===e[0].toUpperCase()?b.push(e):a.push(e))
    a.sort((a,b)=>a.localeCompare(b)),b.sort((a,b)=>b.localeCompare(a))
    return a.concat(b).join` `
}

console.log(sort("Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!"))