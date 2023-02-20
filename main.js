const treeAge=t=>JSON.stringify(t).replace(/\]/g,'').replace(/\,\[/g,'').length

console.log(treeAge([ [],[ [] ] ]))


// const treeAge=(t,z=1)=> {
//   if(t.length===0)return z
//   return +t.map(e=>typeof e==='object'?treeAge(e,z+1):0).join``
// }