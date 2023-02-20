const treeAge=t=>JSON.stringify(t).replace(/\]/g,'').replace(/\,\[/g,'').length

console.log(treeAge([ [],[ [] ] ]))
