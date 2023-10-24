function aaPercentage(s,a=["A", "I", "L", "M", "F", "W", "Y", "V"]){
    return Math.round([...s].filter(e=>a.includes(e)).length/s.length*100)
}

console.log(aaPercentage("MSRSLLLRFLLFLLLLPPLP", ["F", "S", "L"]))