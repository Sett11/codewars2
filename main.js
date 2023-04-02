function formatNumber(n,t,a=[...n+'']){
  for(let i=0;i<a.length;i++)t=t.replace(/\#/,a[i])
  return t.match(/\#/)?"Invalid phone number":t
}

console.log(formatNumber(8123706890, "+## ### ### ##-##"))
console.log(formatNumber(790524790757777777, "+# ### ### ## ##"))