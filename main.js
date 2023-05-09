function fillWater(a,c=0){
 a=a.map(e=>{
  let t=e.slice(0,6)
  if(t==='robber'){
    let z=e
    while(e.length<30)e+='water'
    e=e.slice(0,30)
    c+=e.length-z.length
  }
  return e
 })
 a.push(`${c} litre${c>1?'s':''}`)
 return a
}
console.log(fillWater(["robber-A","robber-123","robber-xyz","stone","grass","tortoise",""]))