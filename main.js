function buildPyramid(s,n,r=n,a=[]){
  s=s.replace(/[^a-z0-9\-]+/gi,'&$&&')
  s=s.slice(0,s.lastIndexOf('&')).split`&`.map(e=>e.includes('-')?e.replace(/-/,'&$&&').split`&`:[e])
  a.push([...s.flat(),...s[0].reverse()])
  const p=s[0][0].length
  while(n>-1){
    s=s.map(e=>e.map(u=>u.match(/[a-zA-Z0-9]/)?u[0].repeat(p)+u:u.match(/\-/)?u[0].repeat(1)+u:u[0].repeat(2)+u))
    n--
    a.push([...s.flat(),...s[0].reverse()])
  }a=a.map(e=>e.join``)
  while(a.length>r)a.pop()
  const l=Math.max(...a.map(e=>e.length))
  a=a.map(e=>' '.repeat(Math.floor((l-e.length)/2))+e)
  return a.join`\n`
}

console.log(buildPyramid("00-00..00-00",7))
console.log(buildPyramid("M-M||M-M",11))
console.log(buildPyramid("T-T  T-T",4))
console.log(buildPyramid("W-W..W-W",4))