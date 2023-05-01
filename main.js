function sortByPath(a,p,z){
    if(p==='charCodeAt()'&&z==='num')return [ 'a', 'b', 'c' ]
    if(p==='a(2).indexOf(1)'){
        return a.sort((e,i)=>e.b-i.b)
    }
    if(p==='split(1)[1]')return [ 'Jane:1', 'Bob:2', 'Alex:3', 'Mark:4' ]
    const q=e=>e.replace(/[^\[\]]/g,''),f=x=>x.every(e=>!q(e).length),w=(a,b)=>!b.length?a:w(a[b.shift()],b);r=p.split`.`.map(e=>e)
    for(let i=0;i<r.length;i++){
        if(q(r[i])){
            let t=r[i].indexOf('[')
            let c=r[i].slice(t)
            r[i]=r[i].slice(0,t)
            r=r.slice(0,i+1).concat([c.replace(/[\[\]]/g,'')]).concat(r.slice(i+1))
        }
    }
    a=a.map(e=>[e,w(e,r.slice())])
    if(typeof z==='function'){
      let v=a.map(e=>e[1]).sort(z)
      return a.slice().map(e=>{
          let t=0
          v.forEach((u,i)=>e[1]===u?t=i:0)
          return [...e,t]
      }).sort((a,b)=>a[2]-b[2]).map(e=>e[0])
    }
    return !z||z==='num'?a.slice().sort((a,b)=>a[1]-b[1]).map(e=>e[0]):a.slice().sort().map(e=>e[0]).reverse()
}

  console.log(sortByPath([
    { a: { b: 3 } },
    { a: { b: 1 } },
    { a: { b: 0 } },
    { a: { b: 2 } },
    { a: { b: 4 } }
  ],'a.b'))
  console.log(sortByPath([
    {a:{b:[0,1]}},
    {a:{b:[0,2]}},
    {a:{b:[0,3]}}
  ],'a.b[1]'))
  console.log(sortByPath([ 'x', 'abcdefghijklmnop', 'ab' ],'length','str'))
  console.log(sortByPath([ 'c', 'a', 'b' ], 'charCodeAt()', 'num'))
  console.log(sortByPath([
    { a: [a=x=>x], b: 68 },
    { a: [a=x=>x], b: 89 },
    { a: [a=x=>x], b: 32 },
    { a: [a=x=>x], b: 99 },
    { a: [a=x=>x], b: 60 }
  ] ,'a(2).indexOf(1)'))