function type(v) {
    if(v===null)return 'null'
    if(typeof v==='object'&&typeof Date.parse(v)==='number'&&Date.parse(v)===Date.parse(v))return 'date'
    if(typeof v==='object'&&v.length===0)return 'array'
    if(typeof v==='object')return 'object'
    return typeof v
  }
console.log(type([]))

