palindromePairs=(a,r=[])=> {
  for(let i=0;i<a.length;i++)for(let j=0;j<a.length;j++)if(i!==j&&(a[i]+'')+a[j]===([...(a[i]+'')+a[j]].reverse().join``))r.push([i,j])
  return r
}

console.log(palindromePairs([5777, 'dog', 'god', true, 75 ]))