function arrayMash (a1, a2, arr=[]) {
   for(let i = 0; i < a1.length; i++){arr.push(a1[i]);arr.push(a2[i])}return arr
}
  console.log(arrayMash([1,2,3],['a','b','c'] ))