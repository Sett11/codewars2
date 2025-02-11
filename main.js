function mirrorImage(a){
  for(let i=-1;++i<a.length-1;)if([[...(a[i+1]+'')].reverse().join``,a[i+1]+''].includes(a[i]+''))return [a[i],a[i+1]]
  return [-1,-1]
}

console.log(mirrorImage([454,86,57,75,16,88]))