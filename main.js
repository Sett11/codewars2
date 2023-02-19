function sortByGuide(arr, g) {
  check=[],arr=arr.map((e,i)=>{
    e=[e,g[i],i]
    if(e[1]===-1){
      check.push(e)
      return '&'
    }
    return e
  }).filter(e=>e!=='&').sort((a,b)=>a[1]-b[1])
  for(let i=0;i<check.length;i++){arr=arr.slice(0,check[i][2]).concat(check[i][0]).concat(arr.slice(check[i][2]))}return arr.map(e=>typeof e==='number'?e:e[0])
}
console.log(sortByGuide([700, 800, 400, 100, 900, 325], [2, -1, 1, -1, 3, -1]))