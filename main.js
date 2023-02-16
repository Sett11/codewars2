inArray=(a,b)=>a.filter(e=>b.some(u=>u.match(e))).sort()
console.log(inArray(["live", "strong", "arp"],["lively", "alive", "harp", "sharp", "armstrong"]))