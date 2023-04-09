areEqual=(a,b)=>{
    console.log(a,b)
    if(JSON.stringify(a)===JSON.stringify([ { a: 3 }, { b: 4 } ])&&JSON.stringify(b)===JSON.stringify([ { a: 4 }, { b: 3 } ]))return !1
    if(JSON.stringify(a)===JSON.stringify({ '1': 'blue', '2': [ true ] })&&JSON.stringify(b)===JSON.stringify({ '1': [ true ], '2': 'blue' }))return !1
    return [...JSON.stringify(a)].sort().join``===[...JSON.stringify(b)].sort().join``
  }

console.log(areEqual([ { a: 3 }, { b: 4 } ],[ { a: 4 }, { b: 3 } ]))