function differentDigitsNumberSearch(a) {
 for(let i=0;i<a.length;i++){if([...new Set([...(a[i]+'')])].length===[...(a[i]+'')].length)return a[i]}return -1
}
console.log(differentDigitsNumberSearch([10, 11, 12, 13]))