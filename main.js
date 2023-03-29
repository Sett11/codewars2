function topScores(a,n) {
  for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
      if(a[i][0]===a[j][0]){
        a[i][1]=Math.max(a[i][1],a[j][1]);a[j]='&'
      }
    }
  }
  return n<1?[]:a.filter(e=>e!=='&').sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,n)
}

console.log(topScores([
  ["Bob", 100],
  ["Jane", 120],
  ["Alice", 10],
  ["Bob", 110],
  ["Bob", 10]
],3))