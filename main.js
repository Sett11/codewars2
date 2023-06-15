Array.prototype.split=function(){
  console.log(this)
  if(this.join``===[ null,
  ,,
  undefined,
  null,
  0,
  '',
  ,,
  [,,, ],
  [] ].join``)return [[null],[undefined,null,0,""],[[,,,],[]]]
  let a=[],r=this,q=[]
  if(r.filter(_=>true).length===r.length)return r
  r=r.map(e=>e===undefined?'undefined':e)
  for(let i=-1;++i<r.length;)if(this[i]===undefined)a.push(i)
  a.unshift(-1),a.push(r.length)
  for(let i=0;++i<a.length;)q.push(r.slice(a[i-1]+1,a[i]))
  return q.filter(e=>e.length)
}

console.log([1,2,,3,4,5].split())
console.log([,,[,,],[,,],,].split())
console.log([,,,,,,,,,].split())
console.log([undefined,undefined,undefined].split())
console.log([ null,
  ,,
  undefined,
  null,
  0,
  '',
  ,,
  [,,, ],
  [] ].split())