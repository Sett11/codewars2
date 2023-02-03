function pairOfShoes(s) {
	const arrNull = [], arrOne = []
    s.forEach(el=>el[0]===0?arrNull.push(el[0]):arrOne.push(el[0]))
    if(arrNull.length!==arrOne.length)return false
    s=Object.values(s.map(el=>el[1]).sort((a,b)=>b-a).reduce((a,c)=>{
        a[c]=(a[c]||0)+1
        return a
    },{}))
    return s.every(el=>el%2===0)
}
console.log(pairOfShoes([[0, 21], 
    [1, 23], 
    [1, 21], 
    [1, 23]]))