compare=(a,b)=>JSON.stringify(a)===JSON.stringify(b)

console.log(compare({val: 1, left: null, right: null},{val: 2, left: null, right: null}))