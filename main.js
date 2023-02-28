findAdded=(s1,s2,c=0)=>c===s1.length?[...s2].map(e=>+e).sort((a,b)=>a-b).join``:findAdded(s1,s2.replace(s1[c],''),c+1)


console.log(findAdded('44554466', '447554466'))