function lookAndSay(b,n,a=[b]){
  while(a.length<=n)a.push(a[a.length-1].replace(/((\d)\2*)/g,e=>e.length+e[0]))
  return a.slice(1)
}

console.log(lookAndSay('1259',5))