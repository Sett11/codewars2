function thatUnitesUs(a,b,n) {
    return [...new Set(a.concat(b))].sort().slice(0,n)
}

console.log(thatUnitesUs(['a', 'z', 'c'], ['b', 'f', 'z'], 3))