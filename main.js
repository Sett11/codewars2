howManyBees=(a,r=[])=>{
  if(!a||!a.length)return 0
  for(let i=0;i<a[0].length;i++){
    let iArr=[]
    for(let j=0;j<a.length;j++)iArr.push(a[j][i])
    r.push(iArr.join``);iArr=[]
  }
  r=r.map(e=>[e.match(/bee/g),e.match(/eeb/g)].filter(u=>u)).filter(e=>e).flat().map(e=>e.length).reduce((a,c)=>a+c,0)
  a=a.map(e=>[e.join``.match(/bee/g),e.join``.match(/eeb/g)].filter(u=>u)).filter(e=>e).flat().map(e=>e.length).reduce((a,c)=>a+c,0)
  return a+r
}

console.log(howManyBees([
  "bee.bee".split(''),
  ".e..e..".split(''),
  ".b..eeb".split('')
]))