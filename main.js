function lookAndSaySequence(b,n,a=[b],c=n){
  while(a.length<n)a.push(a[a.length-1].replace(/((\d)\2*)/g,e=>e.length+e[0]))
  return a[c-1]
}

console.log(lookAndSaySequence('22',10))