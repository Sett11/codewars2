const arr2bin = arr => (arr.map(el => typeof el !== 'number' || el !== el ? 0 : el).reduce((acc,curr) => acc+curr,0)).toString(2)

console.log(arr2bin([1,2,3,4,5]))