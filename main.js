function getLines(n,a=['1']){
  if(n<1||!n)return -1
  while(a.length<n)a.push(a[a.length-1].replace(/((\d)\2*)/g,e=>e.length+e[0]))
  return a.join`,`
}

console.log(getLines(6))