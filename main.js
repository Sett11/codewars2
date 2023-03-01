Array.prototype.sameStructureAs=function(m){
  if(!isArray(this)||!isArray(m))return false
  if(this.every(e=>typeof e!=='object')&&m.every(e=>typeof e!=='object')&&this.length===m.length)return true
  return JSON.stringify(this).replace(/[^\[\]]/g,'0')===JSON.stringify(m).replace(/[^\[\]]/g,'0')
}
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ))
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ))
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ))
console.log([ 1, '[', ']' ].sameStructureAs([ '[', ']', 1 ]))