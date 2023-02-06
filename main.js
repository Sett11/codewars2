var intersect = function () {
    const arr = [...arguments], len = arr.length, check=Object.entries(arr.slice().flat().reduce((a,c)=>{
        a[c]=(a[c]||0)+1
        return a
    },{})).filter(el=>el[1]===len).map(el=>el[0]), res = []
    return [...new Set(arr.flat().filter(el=>check.includes(el)))]
}
  console.log(intersect(['dog', 'bar', 'foo'],['foo', 'bar', 'cat'],['gin', 'bar', 'foo']))