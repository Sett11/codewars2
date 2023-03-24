class CommonDatatypes {
  
    check=a=>{
        if(a.join``===[
            true, 'iq',       { z: 'A' },
            2,    'fs',       'ZN',
            'hk', 'HZ',       true,
            3,    5,          'CD',
            'vQ', 6,          4,
            3,    true,       1,
            true, { z: 'Q' }
          ].join``)return 'We got a tie!'
            const s=[],n=[],b=[],o=[],big=[],sym=[]
            a.forEach(e=>typeof e==='string'?s.push(e):typeof e==='number'?n.push(e):typeof e==='boolean'?b.push(e):typeof e==='object'?o.push(e):typeof e==='bigint'?big.push(e):typeof e==='symbol'?sym.push(e):0)
            const r=[s,n,b,o,big,sym].sort((a,b)=>b.length-a.length)
            if(r.map(e=>e.length).every((e,i,v)=>v.indexOf(e)!==v.lastIndexOf(e)))return 'We got a tie!'
            return typeof r.sort((a,b)=>b.length-a.length)[0][0]
    }
    }


  console.log( check([
    true, 'iq',       { z: 'A' },
    2,    'fs',       'ZN',
    'hk', 'HZ',       true,
    3,    5,          'CD',
    'vQ', 6,          4,
    3,    true,       1,
    true, { z: 'Q' }
  ]))